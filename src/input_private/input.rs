use sdl2::event::Event;
use sdl2::mouse::MouseUtil;
use input::keyboard::Key;
use input::mouse::MouseButton;
use input_private::mouse;
use input::Button;
use input::Axis;
use std::io::Error;
use std::io::Write;
use std::io::Read;
use std::fs::File;
use std::clone::Clone;
use std::collections::HashMap;
use bincode::SizeLimit;
use bincode::serde::{serialize, SerializeError, deserialize, DeserializeError};
use num::FromPrimitive;
use input::mouse::Mouse;

/// Allows you to query user input, and save and load keybindings and axes.
pub struct Input {
    buttons_pressed: Vec<Button>,
    previous_buttons_pressed: Vec<Button>, // buttons_pressed from last frame.
    axes: HashMap<i32, Axis>,
    actions: HashMap<i32, Button>,
    pub mouse: Mouse,
}

#[derive(Debug)]
pub enum BincodeIOError {
    IOError(Error),
    DeserializeError(DeserializeError),
    SerializeError(SerializeError),
}

impl From<Error> for BincodeIOError{
    fn from(err: Error) -> BincodeIOError {
        BincodeIOError::IOError(err)
    }
}

impl From<DeserializeError> for BincodeIOError {
    fn from(err: DeserializeError) -> BincodeIOError {
        BincodeIOError::DeserializeError(err)
    }
}

impl From<SerializeError> for BincodeIOError {
    fn from(err: SerializeError) -> BincodeIOError {
        BincodeIOError::SerializeError(err)
    }
}

impl Input {
    pub fn load_bindings(&mut self, path: &str) -> Result<(), BincodeIOError> {
        let mut f = File::open(path)?;
        let mut buf = Vec::new();
        f.read_to_end(&mut buf)?;
        let (axes, actions) =
            deserialize::<(HashMap<i32, Axis>, HashMap<i32, Button>)>(buf.as_slice())?;
        self.axes = axes;
        self.actions = actions;
        Ok(())
    }

    pub fn save_bindings(&mut self, path: &str) -> Result<(), BincodeIOError> {
        let mut f = File::create(path)?;
        let result = serialize(&(&self.axes, &self.actions), SizeLimit::Infinite)?;
        f.write_all(result.as_slice())?;
        Ok(())
    }

    pub fn add_axis(&mut self, axis: Axis, id: i32) {
        if self.axes.contains_key(&id) {
            panic!("Axis id values must be unique!");
        }
        self.axes.insert(id, axis);
    }

    pub fn get_axis_value(&self, id: i32) -> Option<f32> {
        if let Some(axis) = self.axes.get(&id) {
            return Some(axis.get_value(self));
        }
        None
    }

    pub fn add_action(&mut self, button: Button, id: i32) {
        if self.actions.contains_key(&id) {
            panic!("Action id values must be unique!");
        }
        self.actions.insert(id, button);
    }

    pub fn action_pressed(&self, id: i32) -> Option<bool> {
        if let Some(button) = self.actions.get(&id) {
            return Some(self.is_button_pressed(*button));
        }
        None
    }

    pub fn action_down(&self, id: i32) -> Option<bool> {
        if let Some(button) = self.actions.get(&id) {
            return Some(self.is_button_down(*button));
        }
        None
    }

    pub fn action_released(&self, id: i32) -> Option<bool> {
        if let Some(button) = self.actions.get(&id) {
            return Some(self.is_button_released(*button));
        }
        None
    }

    pub fn is_button_pressed(&self, button: Button) -> bool {
        (&self.buttons_pressed).into_iter().any(|&b| b == button) &&
        !(&self.previous_buttons_pressed).into_iter().any(|&b| b == button)
    }

    pub fn is_button_down(&self, button: Button) -> bool {
        (&self.buttons_pressed).into_iter().any(|&b| b == button)
    }

    pub fn is_button_released(&self, button: Button) -> bool {
        !(&self.buttons_pressed).into_iter().any(|&b| b == button) &&
        (&self.previous_buttons_pressed).into_iter().any(|&b| b == button)
    }
}

pub fn new(mouse_util: MouseUtil) -> Input {
    Input {
        buttons_pressed: vec![],
        previous_buttons_pressed: vec![],
        axes: HashMap::new(),
        actions: HashMap::new(),
        mouse: mouse::new(mouse_util),
    }
}

pub fn process_event(input: &mut Input, input_event: &Event) {
    match *input_event {
        Event::KeyDown { scancode, repeat, .. } => {
            if !repeat {
                if let Some(scancode) = scancode {
                    input.buttons_pressed.push(Button::Keyboard(Key::from_u32(scancode as u32)
                                                                    .unwrap()));
                }
            }
        }
        Event::KeyUp { scancode, repeat, .. } => {
            if !repeat {
                if let Some(scancode) = scancode {
                    while let Some(i) = input.buttons_pressed
                        .iter()
                        .position(|&item| {
                            item == Button::Keyboard(Key::from_u32(scancode as u32).unwrap())
                        }) {
                        input.buttons_pressed.swap_remove(i);
                    }
                }
            }
        }
        Event::MouseButtonDown { mouse_btn, .. } => {
            input.buttons_pressed.push(Button::Mouse(MouseButton::from_u32(mouse_btn as u32)
                                                         .unwrap()));
        }
        Event::MouseButtonUp { mouse_btn, .. } => {
            while let Some(i) = input.buttons_pressed
                .iter()
                .position(|&item| {
                    item == Button::Mouse(MouseButton::from_u32(mouse_btn as u32).unwrap())
                }) {
                input.buttons_pressed.swap_remove(i);
            }
        }
        Event::MouseMotion{..} => {
            mouse::process_event(&mut input.mouse, input_event);
        }
        _ => {}
    }
}

pub fn shift_frame(input: &mut Input) {
    input.previous_buttons_pressed = input.buttons_pressed.clone();
}

extern crate nitro;

use nitro::App;
use nitro::GameObject;
use nitro::input::Axis;
use nitro::input::Button;
use nitro::input::keyboard::Key;
use nitro::component::Spinny;

fn main() {
    // Create a new game and run it.
    let mut app = App::new();
    app.add_axis(Axis::new(Button::Keyboard(Key::D), Button::Keyboard(Key::A), String::from("horizontal")));
    let mut game_obj = GameObject::new(&mut app);
    *game_obj.transform.x() = 400.0;
    *game_obj.transform.y() = 300.0;
    game_obj.texture = app.fetch_texture("nitro.png");
    game_obj.add_component(Box::new(Spinny{}));
    app.add_gameobject(game_obj);
    app.run();
}

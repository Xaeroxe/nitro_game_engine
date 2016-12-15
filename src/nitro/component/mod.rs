mod spinny;
pub use self::spinny::Spinny;

use nitro::app::App;
use nitro::game_object::GameObject;
use std::any::Any;

pub trait Component {
    fn receive_message(&mut self, app : &mut App, game_object : &mut GameObject, message : &Message);
}

pub enum Message {
    Update{delta_time : f64},
    UserMessage(Box<Any>)
}

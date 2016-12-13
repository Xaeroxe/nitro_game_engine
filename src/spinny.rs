use component::Component;
use component::Message;
use game_object::GameObject;

pub struct Spinny {

}

impl Component for Spinny {
    fn receive_message(&mut self, game_object : &mut GameObject, message : &Message) {
        match *message {
            Message::Update{delta_time} => {
                game_object.transform.add_rotation(1.0 * delta_time);
                game_object.transform.add_x(10.0 * delta_time);
            }
            _ => {}
        }
    }
}

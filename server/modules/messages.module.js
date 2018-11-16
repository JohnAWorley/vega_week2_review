// our messages
let messages = [ { text: 'test', sender: 'person' } ];

function addMessage( newMessage ){
    console.log( 'in addMessage' );
} // end addMessage

module.exports = { messages: messages, addMessage: addMessage };
// our messages
let messages = [];

function addMessage( newMessage ){
    console.log( 'in addMessage:', newMessage );
    messages.push( newMessage );
    return true;
} // end addMessage

module.exports = { messages: messages, addMessage: addMessage };
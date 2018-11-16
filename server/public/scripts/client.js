$( document ).ready( readyNow );

class Message{
    constructor( sender, text ){
        this.sender = sender;
        this.text = text;
    } // end constructor
} // end Class

function getMessages(){
    console.log( 'in getMessages' );
    // make ajax get request
    $.ajax({
        method: 'GET',
        url: '/messages'
    }).then( function( response ){
        console.log( 'back from GET with:', response );
        // empty the output element
        let el = $( '#messagesOut' );
        el.empty();
        // loop through response
        for( let message of response ){
            // display each message in the #messagesOut ul element
            el.append( `<li>${ message.text}: <strong>${message.sender}</strong></li>`);
        } // end for
    }) //end ajax
} // end getMessages

function readyNow(){
    console.log( 'JQ' );
    $( '#sendMessageButton' ).on( 'click', sendMessage );
    $( '#refreshButton' ).on( 'click', getMessages );
    // init
    // get messages when page loads
    getMessages();
} // end readyNow

function sendMessage(){
    console.log( 'in sendMessage' );
    // get user input
    // check for empties
    if( $( '#usernameIn' ).val() === '' || $( '#newMessageIn' ).val() === '' ){
        alert( 'no empties!' );
    } // end has empties
    else{
        // if no empties
        // create a message
        const messageToSend = new Message( $( '#usernameIn' ).val(), $( '#newMessageIn' ).val() );
        console.log( 'sending:', messageToSend );
        // send message to server via POST
        $.ajax({
            method: 'POST',
            url: '/messages',
            data: messageToSend
        }).then( function( response ){
            console.log( 'back from POST with:', response );
            // empty input fields
            $( '#newMessageIn' ).val('');
            // update messages on DOM
            getMessages();
        })
    } //end no empties
} // end sendMessage
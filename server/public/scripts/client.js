$( document ).ready( readyNow );

const verbose = false;

class Message{
    constructor( sender, text ){
        this.sender = sender;
        this.text = text;
    } // end constructor
} // end Class

function getMessages(){
    if( verbose ) console.log( 'in getMessages' );
    // make ajax get request
    $.ajax({
        method: 'GET',
        url: '/messages'
    }).then( function( response ){
        if( verbose ) console.log( 'back from GET with:', response );
        // empty the output element
        let el = $( '#messagesOut' );
        el.empty();
        // loop through response
        for( let message of response ){
            // display each message in the #messagesOut ul element
            el.append( `<li>${ message.text}: <strong><span class="senderClick">${message.sender}<span></strong></li>`);
        } // end for
    }) //end ajax
} // end getMessages

function getSender(){
    console.log( 'in getSender:', $( this ).text() );
} // end getSender

function readyNow(){
    if( verbose ) console.log( 'JQ' );
    $( '#sendMessageButton' ).on( 'click', sendMessage );
    $( '#refreshButton' ).on( 'click', getMessages );
    $( '#messagesOut' ).on( 'click', '.senderClick', getSender );
    // init
    // get messages when page loads
    getMessages();
} // end readyNow

function sendMessage(){
    if( verbose ) console.log( 'in sendMessage' );
    // get user input
    // check for empties
    if( $( '#usernameIn' ).val() === '' || $( '#newMessageIn' ).val() === '' ){
        alert( 'no empties!' );
    } // end has empties
    else{
        // if no empties
        // create a message
        const messageToSend = new Message( $( '#usernameIn' ).val(), $( '#newMessageIn' ).val() );
        if( verbose ) console.log( 'sending:', messageToSend );
        // send message to server via POST
        $.ajax({
            method: 'POST',
            url: '/messages',
            data: messageToSend
        }).then( function( response ){
            if( verbose ) console.log( 'back from POST with:', response );
            // empty input fields
            $( '#newMessageIn' ).val('');
            // update messages on DOM
            getMessages();
        })
    } //end no empties
} // end sendMessage
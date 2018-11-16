// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const messages = require( './modules/routes/messages.route' );
// globals
const app = express();
const port = 5001;
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( '/messages', messages  );
// spin up server
app.listen( port, function(){
    console.log( 'server up on:', port );
}); // end server up
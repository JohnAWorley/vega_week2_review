// requires
const express = require( 'express' );
const bodyParser = require( 'body-parser' );
// globals
const app = express();
const port = 5001;
// uses
app.use( express.static( 'server/public' ) );
app.use( bodyParser.urlencoded( { extended: true } ) );
// spin up server
app.listen( port, function(){
    console.log( 'server up on:', port );
}); // end server up
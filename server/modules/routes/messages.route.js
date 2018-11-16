const express = require( 'express' );
const router = express.Router();

let messageModule = require( '../messages.module' );

router.get( '/', ( req, res )=>{
    console.log( 'GET hit' );
    res.send( messageModule.messages );
}) // end GET

router.post( '/', ( req, res )=>{
    console.log( 'POST hit:', req.body );
    res.send( 'ka-kaw' );
}) // end POST

module.exports = router;
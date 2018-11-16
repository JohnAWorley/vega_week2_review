const express = require( 'express' );
const router = express.Router();

let messages = [];

router.get( '/', ( req, res )=>{
    console.log( 'GET hit' );
    res.send( messages );
}) // end GET

router.post( '/', ( req, res )=>{
    console.log( 'POST hit:', req.body );
    res.send( 'ka-kaw' );
}) // end POST

module.exports = router;
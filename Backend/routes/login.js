let ans = require( '../db/api_call' );
let hashString = require( '../env/variable' );

let authreq = async ( req, res ) => {
    if ( req.headers.authorization === hashString ) {
        res.status( 200 ).json( { "message":"success" } )
    } else {
        res.status( 403 ).json( { "message":"failed" } )
    }
}

module.exports = authreq;
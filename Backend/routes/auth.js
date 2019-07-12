let ans = require( '../db/api_call' );
let hashString = require( '../env/variable' );


let authreq = async ( req, res, next ) => {

    if ( req.headers.authorization === hashString ) {
        next()
    } else {
        res.status( 403 ).json( {"msg": "Not Authorized"} ) 
    }
}

module.exports = authreq;
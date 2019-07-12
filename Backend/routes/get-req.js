let ans = require( '../db/api_call' );

let getReq = async ( req, res ) => {
    try {
        let data = await ans( 'peek' );
        res.send( data );
    } catch( err ) {
        console.log( err );
    }
}

module.exports = getReq;
let ans = require( '../db/api_call' );

let deleteReq = async ( req, res ) => {
    let temp = ""
    temp = 'remove/' + req.params.id
    try {
        let data = await ans( temp, 'DELETE' );
        res.send( data );
    } catch( err ) {
        console.log( err );
    }
}

module.exports = deleteReq
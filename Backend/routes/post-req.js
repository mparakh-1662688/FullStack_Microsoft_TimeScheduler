let ans = require( '../db/api_call' );

let postReq = async ( req, res ) => {
    let act = ""
    act = 'read/' + req.params.id
    try {
        let data = await ans( act, 'GET' )
        res.send( data )
    } catch( err ) {
        console.log( err )
    }
}

module.exports = postReq
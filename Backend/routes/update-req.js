let ans = require( '../db/api_call' );
let helperConflict = require( '../helpers/conflict' )

let updateReq = async ( req, res ) => {
    let extention = ""
    extention = 'update/' + req.params.id
    let areOverlaps = await helperConflict( req )
    if ( !areOverlaps ) {
        res.status( 409 ).json( { "msg": "Overlaps"} )
        return;
    }
    try {
        let data = await ans( extention, 'PUT', JSON.stringify( req.body ) );
        res.send( data );
    } catch( err ) {
        console.log( err );
    }
}

module.exports = updateReq
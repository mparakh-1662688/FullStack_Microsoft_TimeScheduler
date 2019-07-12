let ans = require( '../db/api_call' )
let helperConflict = require( '../helpers/conflict' )


let createReq = async ( req, res ) => {
    let temp = ""
    temp = 'create/' + req.params.id
    let isOverlaps = await helperConflict( req )
    if ( !isOverlaps ) {
        res.status( 409 ).json( { "msg": "Overlaps"} )
        return;
    }
    

    try {
        let data = await ans( temp, 'POST', JSON.stringify( req.body ) );
        res.send( data );
    } catch( err ) {
        console.log( err );
        res.status( 500 ).json( { "msg": err } )
        return;

    }
}

module.exports = createReq


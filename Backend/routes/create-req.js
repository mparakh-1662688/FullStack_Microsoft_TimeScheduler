const ans = require('../db/api_call')
const helperConflict = require('../helpers/conflict')


var createReq = async (req,res) => {
    let temp = ""
    temp = 'create/' + req.params.id
    let overlaps = await helperConflict(req)
    if ( !overlaps ) {
        res.status( 409 ).json( { "msg": "Overlaps"} )
        return;
    }
    

    try {
        const data = await ans(temp, 'POST', JSON.stringify(req.body));
        res.send(data);
    } catch( err ) {
        console.log( err );
        res.status( 500 ).json( { "msg": err } )
        return;

    }
}

module.exports = createReq


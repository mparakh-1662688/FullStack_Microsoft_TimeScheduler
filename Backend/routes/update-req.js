const ans = require('../db/api_call');
const helperConflict = require('../helpers/conflict')


var updateReq = async (req, res) => {
    let extention = ""
    extention = 'update/' + req.params.id

    let overlaps = await helperConflict(req)
    if ( !overlaps ) {
        res.status( 409 ).json( { "msg": "Overlaps"} )
        return;
    }
    

    try {
        const data = await ans(extention, 'PUT', JSON.stringify(req.body));
        res.send(data);
    } catch( err ) {
        console.log( err );
    }


}

module.exports = updateReq
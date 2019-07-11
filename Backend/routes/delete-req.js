const ans = require('../db/api_call');
// let readKey = '2' // will make it dynamic
// let action = 'remove/' + readKey

var deleteReq = async (req, res) => {
    let temp = ""
    temp = 'remove/' + req.params.id
    try {
        const data = await ans(temp, 'DELETE');
        res.send(data);
    } catch( err ) {
        console.log( err );
    }


}

module.exports = deleteReq
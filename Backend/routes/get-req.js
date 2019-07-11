const ans = require('../db/api_call');


var getReq = async (req, res) => {

    try {
        const data = await ans('peek');
        res.send(data);
    } catch( err ) {
        console.log( err );
    }


}

module.exports = getReq;
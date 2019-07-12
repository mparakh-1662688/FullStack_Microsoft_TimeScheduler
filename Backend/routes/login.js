const ans = require('../db/api_call');
const hashString = require('../env/variable');


var authreq = async (req, res) => {

    if (req.headers.authorization === hashString) {
        res.status(200).json({"message":"success"})
    } else {
        res.status(403).json({"message":"failed"})
    }
    


}

module.exports = authreq;
const ans = require('../db/api_call');
const hashString = require('../env/variable');


var authreq = async (req, res, next) => {

    if (req.headers.authorization === hashString) {
        next()
    } else {
        res.status(403).json({"msg": "Not Authorized"}) 
    }
}

module.exports = authreq;
const ans = require('../db/api_call');
let readKey = '2' 

var postReq = async (req, res) => {

    let act = ""
    act = 'read/' + req.params.id
    console.log(act)
    try {
        const data = await ans(act, 'GET')
        res.send(data)
    } catch( err ) {
        console.log( err )
    }

}

module.exports = postReq
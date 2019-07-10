const router = require('express').Router()
const getReq = require('./get-req')
const postReq = require('./post-req')
const deleteReq = require('./delete-req')
const createReq = require('./create-req')
const updateReq = require('./update-req')
const check = require('./auth')


router.get('/peek', getReq)

router.get('/peek', getReq)

router.get('/check', check)

router.get('/read/:id', postReq)

router.delete('/remove/:id', deleteReq)

router.post('/create/:id', createReq)

router.put('/update/:id', updateReq)



module.exports = router;
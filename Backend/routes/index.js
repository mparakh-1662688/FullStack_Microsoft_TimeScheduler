let router = require( 'express' ).Router()
let getReq = require( './get-req' )
let postReq = require( './post-req' )
let deleteReq = require( './delete-req' )
let createReq = require( './create-req' )
let updateReq = require( './update-req' )
let check = require( './auth' )

router.get( '/peek', getReq )

router.get( '/check', check )

router.get( '/read/:id', postReq )

router.delete( '/remove/:id', deleteReq )

router.post( '/create/:id', createReq )

router.put( '/update/:id', updateReq )

module.exports = router;
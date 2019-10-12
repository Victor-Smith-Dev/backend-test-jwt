const express = require('express')
const router = express.Router()
const courseController = require('../controllers/courseController')
const verifyMiddleware = require('../middlewares/verifyJwtMiddleware')
/**
 * 
 */
router.route('/list')
    .get(verifyMiddleware, courseController.list )
    .post(verifyMiddleware, courseController.list )
/**
 * 
 */
router.route('/create')
    .get(verifyMiddleware, courseController.create )
	.post(verifyMiddleware, courseController.create )
/**
 * 
 */
module.exports = router
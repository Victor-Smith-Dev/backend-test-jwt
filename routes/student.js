const express = require('express')
const router = express.Router()
const studentController = require('../controllers/studentController')
const verifyMiddleware = require('../middlewares/verifyJwtMiddleware')
/**
 * 
 */
router.route('/list')
    .get(verifyMiddleware, studentController.list )
    .post(verifyMiddleware, studentController.list )
/**
 * 
 */
router.route('/create')
    .get(verifyMiddleware, studentController.create )
	.post(verifyMiddleware, studentController.create )
/**
 * 
 */
module.exports = router
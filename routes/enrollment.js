const express = require('express')
const router = express.Router()
const enrollmentController = require('../controllers/enrollmentController')
const verifyMiddleware = require('../middlewares/verifyJwtMiddleware')
/**
 * 
 */
router.route('/list')
    .get(verifyMiddleware, enrollmentController.list )
/**
 * 
 */
router.route('/list/:id')
    .get(verifyMiddleware, enrollmentController.listByStudentId )
/**
 * 
 */
router.route('/credits50')
    .get(verifyMiddleware, enrollmentController.listStudentsWithCredits50)
/**
 * 
 */
router.route('/list/course/:id')
    .get(verifyMiddleware, enrollmentController.listCourseStudentsCredits )
/**
 * 
 */
router.route('/create').post(verifyMiddleware, enrollmentController.create )
/**
 * 
 */
module.exports = router
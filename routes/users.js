const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController')
const verifyMiddleware = require('../middlewares/verifyJwtMiddleware')
/**
 * 
 */
router.route('/list')
  .get( verifyMiddleware, userController.list )
  .post( verifyMiddleware, userController.list )
/**
 * 
 */
module.exports = router;


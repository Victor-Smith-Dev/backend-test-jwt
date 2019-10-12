const express = require('express')
const router = express.Router()
const auth_controller = require('../controllers/authController')

router.route('/login')
	.get( auth_controller.login )
	.post( auth_controller.login )
	
router.route('/register')
	.get( auth_controller.register )
	.post( auth_controller.register )

module.exports = router
const express = require("express")

//Controller functions
const {signupUser, loginUser} = require('../controller/UserController')

const router = express.Router()

//Login Route
router.post('/login', loginUser)

//Sign Up Route
router.post('/signup', signupUser)

module.exports = router
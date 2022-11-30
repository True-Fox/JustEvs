const express = require('express')
const {
    createFeedback
} = require('../controller/FeedbackController')

const router = express.Router()

//POST a new feedback
router.post('/', createFeedback)

module.exports = router
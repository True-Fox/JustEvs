const Feedback = require('../models/feedbackModel')

// create new feedback
const createFeedback = async (req, res) => {
    const {feedbackText} = req.body

    // add doc to db 
    try {
        const feedback = await Feedback.create({feedbackText})
        res.status(200).json(feedback)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

module.exports = {
    createFeedback
}
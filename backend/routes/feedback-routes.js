const express = require('express');
const { check } = require('express-validator');

const feedbackController = require('../service/feedback-service');
const router = express.Router();

router.post('/', feedbackController.addComment);
router.get('/', feedbackController.getComments);
router.post('/delete', feedbackController.removeComment);
router.get('/:pid', feedbackController.getCommentsByUserId);
module.exports = router;
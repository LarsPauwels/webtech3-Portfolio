const express = require('express');
const router = express.Router();
const messageController = require("../controllers/message_id");

router.get('/messages/:id', messageController.get);

module.exports = router;
const express = require('express');
const router = express.Router();
const messageController = require("../controllers/message");

router.get('/messages', messageController.get);
router.get('/messages/:id', messageController.getId);
router.post('/messages', messageController.post);
router.put('/messages/:id', messageController.put_id);
router.delete('/messages/:id', messageController.delete_id);

module.exports = router;
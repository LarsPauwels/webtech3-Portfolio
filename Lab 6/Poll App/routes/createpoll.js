const express = require("express");
const router = express.Router();
const polController = require("../controllers/createpoll");

router.get('/', polController.get);

router.post('/', polController.post);

module.exports = router;
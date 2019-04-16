const express = require("express");
const router = express.Router();
const polController = require("../controllers/poll");

router.get('/', polController.get);

module.exports = router;
const express = require("express");
const router = express.Router();

const reminderController = require("../controllers/reminderController");
const authentication = require("../middleware/authentication");

router.get("/reminder-page", authentication.authenticate, reminderController.reminderPage);

module.exports = router;
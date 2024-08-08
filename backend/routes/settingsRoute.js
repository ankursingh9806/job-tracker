const express = require("express");
const router = express.Router();

const settingsController = require("../controllers/settingsController");
const authentication = require("../middleware/authentication");

router.get("/settings-page", authentication.authenticate, settingsController.settingsPage);

module.exports = router;
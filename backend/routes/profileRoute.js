const express = require("express");
const router = express.Router();

const profileController = require("../controllers/profileController");
const authentication = require("../middleware/authentication");

router.get("/profile-page", authentication.authenticate, profileController.profilePage);

module.exports = router;
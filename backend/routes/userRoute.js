const express = require("express");
const router = express.Router();

const userController = require("../controllers/userController");

router.get("/job-tracker-page", userController.jobTrackerPage);
router.get("/signup-page", userController.signupPage);
router.get("/login-page", userController.loginPage);
router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.post("/logout", userController.logout);

module.exports = router;
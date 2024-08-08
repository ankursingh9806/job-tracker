const express = require("express");
const router = express.Router();

const jobApplicationController = require("../controllers/jobApplicationController");
const authentication = require("../middleware/authentication");

router.get("/job-application-page", authentication.authenticate, jobApplicationController.jobApplicationPage);

module.exports = router;
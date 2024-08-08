const express = require("express");
const router = express.Router();

const jobSearchController = require("../controllers/jobSearchController");
const authentication = require("../middleware/authentication");

router.get("/job-search-page", authentication.authenticate, jobSearchController.jobSearchPage);

module.exports = router;
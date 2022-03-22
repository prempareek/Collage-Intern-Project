const express = require('express');
const router = express.Router();
const collegeController = require("../controller/collegeContoller")
const internController = require("../controller/internController")







router.post("/colleges", collegeController.createColleges)
router.post("/interns", internController.createInterns)
router.get("/collegeDetails", internController.getDetails)

module.exports = router;
const express = require("express");
const router = express.Router();
const {
    malayalamStudents,
    firstSemMalayalamStudents,
    secondSemMalayalamStudents,
    thirdSemMalayalamhStudents,
    fourthSemMalayalamStudents,
    fifthSemMalayalamStudents,
    sixthSemMalayalamStudents
} = require("../controllers/malayalamController");

//get all malayalam students result
router.get("/", malayalamStudents);

//get all firstsem malayalam student result
router.get("/firstsem", firstSemMalayalamStudents);

//get all secondsem malayalam student result
router.get("/secondsem", secondSemMalayalamStudents);

//get all thirdsem malayalam student result
router.get("/thirdsem", thirdSemMalayalamhStudents);

//get all fourthsem malayalam student result
router.get("/fourthsem", fourthSemMalayalamStudents);

//get all fifthsem malayalam student result
router.get("/fifthsem", fifthSemMalayalamStudents);

//get all sixthsem malayalam student result
router.get("/sixthsem", sixthSemMalayalamStudents);

module.exports = router;
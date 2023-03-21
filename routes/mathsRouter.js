const express = require("express");
const router = express.Router();
const {
    mathsStudents,
    firstSemMathsStudents,
    secondSemMathsStudents,
    thirdSemMathsStudents,
    fourthSemMathsStudents,
    fifthSemMathsStudents,
    sixthSemMathsStudents
} = require("../controllers/mathsController");

//get all mathematics students result
router.get("/", mathsStudents);

//get all firstsem mathematics student result
router.get("/firstsem", firstSemMathsStudents);

//get all secondsem mathematics student result
router.get("/secondsem", secondSemMathsStudents);

//get all thirdsem mathematics student result
router.get("/thirdsem", thirdSemMathsStudents);

//get all fourthsem mathematics student result
router.get("/fourthsem", fourthSemMathsStudents);

//get all fifthsem mathematics student result
router.get("/fifthsem", fifthSemMathsStudents);

//get all sixthsem mathematics student result
router.get("/sixthsem", sixthSemMathsStudents);

module.exports = router;
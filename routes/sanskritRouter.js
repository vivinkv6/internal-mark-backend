const express = require("express");
const router = express.Router();
const {
    sanskritStudents,
    firstSemSanskritStudents,
    secondSemSanskritStudents,
    thirdSemSanskritStudents,
    fourthSemSanskritStudents,
    fifthSemSanskritStudents,
    sixthSemSanskritStudents
} = require("../controllers/sanskritController");

//get all Sanskrit students result
router.get("/", sanskritStudents);

//get all firstsem Sanskrit student result
router.get("/firstsem", firstSemSanskritStudents);

//get all secondsem Sanskrit student result
router.get("/secondsem", secondSemSanskritStudents);

//get all thirdsem Sanskrit student result
router.get("/thirdsem", thirdSemSanskritStudents);

//get all fourthsem Sanskrit student result
router.get("/fourthsem", fourthSemSanskritStudents);

//get all fifthsem Sanskrith student result
router.get("/fifthsem", fifthSemSanskritStudents);

//get all sixthsem Sanskrit student result
router.get("/sixthsem", sixthSemSanskritStudents);

module.exports = router;

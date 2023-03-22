const express = require("express");
const router = express.Router();
const {
    hindiStudents,
    firstSemHindiStudents,
    secondSemHindiStudents,
    thirdSemHindiStudents,
    fourthSemHindiStudents,
    fifthSemHindiStudents,
    sixthSemHindiStudents
} = require("../controllers/hindiController");

//get all Hindi students result
router.get("/", hindiStudents);

//get all firstsem Hindi student result
router.get("/firstsem", firstSemHindiStudents);

//get all secondsem Hindi student result
router.get("/secondsem", secondSemHindiStudents);

//get all thirdsem Hindi student result
router.get("/thirdsem", thirdSemHindiStudents);

//get all fourthsem Hindi student result
router.get("/fourthsem", fourthSemHindiStudents);

//get all fifthsem Hindi student result
router.get("/fifthsem", fifthSemHindiStudents);

//get all sixthsem Hindi student result
router.get("/sixthsem", sixthSemHindiStudents);

module.exports = router;

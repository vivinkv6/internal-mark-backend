const express = require("express");
const router = express.Router();
const {
    economicsStudents,
    firstSemEconomicsStudents,
    secondSemEconomicsStudents,
    thirdSemEconomicsStudents,
    fourthSemEconomicsStudents,
    fifthSemEconomicsStudents,
    sixthSemEconomicsStudents
} = require("../controllers/economicsController");

//get all economics students result
router.get("/", economicsStudents);

//get all firstsem economics student result
router.get("/firstsem", firstSemEconomicsStudents);

//get all secondsem economics student result
router.get("/secondsem", secondSemEconomicsStudents);

//get all thirdsem economics student result
router.get("/thirdsem", thirdSemEconomicsStudents);

//get all fourthsem economics student result
router.get("/fourthsem", fourthSemEconomicsStudents);

//get all fifthsem economics student result
router.get("/fifthsem", fifthSemEconomicsStudents);

//get all sixthsem economics student result
router.get("/sixthsem", sixthSemEconomicsStudents);

module.exports = router;
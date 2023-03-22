const express = require("express");
const router = express.Router();
const {
    politicalScienceStudents,
    firstSemPoliticalScienceStudents,
    secondSemPoliticalScienceStudents,
    thirdSemPoliticalScienceStudents,
    fourthSemPoliticalScienceStudents,
    fifthSemPoliticalScienceStudents,
    sixthSemPoliticalScienceStudents
} = require("../controllers/politicalScienceController");

//get all PoliticalScience students result
router.get("/", politicalScienceStudents);

//get all firstsem PoliticalScience student result
router.get("/firstsem", firstSemPoliticalScienceStudents);

//get all secondsem PoliticalScience student result
router.get("/secondsem", secondSemPoliticalScienceStudents);

//get all thirdsem PoliticalScience student result
router.get("/thirdsem", thirdSemPoliticalScienceStudents);

//get all fourthsem PoliticalScienceh student result
router.get("/fourthsem", fourthSemPoliticalScienceStudents);

//get all fifthsem PoliticalScience student result
router.get("/fifthsem", fifthSemPoliticalScienceStudents);

//get all sixthsem PoliticalScience student result
router.get("/sixthsem", sixthSemPoliticalScienceStudents);

module.exports = router;
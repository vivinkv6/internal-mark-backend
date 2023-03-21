const express = require("express");
const router = express.Router();
const {
  psychologyStudents,
  firstSemPsychologyStudents,
  secondSemPsychologyStudents,
  thirdSemPsychologyStudents,
  fourthSemPsychologyStudents,
  fifthSemPsychologyStudents,
  sixthSemPsychologyStudents,
} = require("../controllers/psychologyController");

//get all psychology students result
router.get("/", psychologyStudents);

//get all firstsem psychology student result
router.get("/firstsem", firstSemPsychologyStudents);

//get all secondsem psychology student result
router.get("/secondsem", secondSemPsychologyStudents);

//get all thirdsem psychology student result
router.get("/thirdsem", thirdSemPsychologyStudents);

//get all fourthsem psychology student result
router.get("/fourthsem", fourthSemPsychologyStudents);

//get all fifthsem psychology student result
router.get("/fifthsem", fifthSemPsychologyStudents);

//get all sixthsem psychology student result
router.get("/sixthsem", sixthSemPsychologyStudents);

module.exports = router;

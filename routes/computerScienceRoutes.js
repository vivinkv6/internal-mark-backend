const express = require("express");
const router = express.Router();
const {
  computerScienceStudents,
  firstSemComputerScienceStudents,
  secondSemComputerScienceStudents,
  thirdSemComputerScienceStudents,
  fourthSemComputerScienceStudents,
  fifthSemComputerScienceStudents,
  sixthSemComputerScienceStudents,
} = require("../controllers/computerScienceController");

//get all computer science students result
router.get("/", computerScienceStudents);

//get all firstsem computerscience student result
router.get("/firstsem", firstSemComputerScienceStudents);

//get all secondsem computerscience student result
router.get("/secondsem", secondSemComputerScienceStudents);

//get all thirdsem computerscience student result
router.get("/thirdsem", thirdSemComputerScienceStudents);

//get all fourthsem computerscience student result
router.get("/fourthsem", fourthSemComputerScienceStudents);

//get all fifthsem computerscience student result
router.get("/fifthsem", fifthSemComputerScienceStudents);

//get all sixthsem computerscience student result
router.get("/sixthsem", sixthSemComputerScienceStudents);

module.exports = router;

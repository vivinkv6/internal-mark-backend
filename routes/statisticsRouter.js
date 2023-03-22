const express = require("express");
const router = express.Router();
const {
  statisticsStudents,
  firstSemStatisticsStudents,
  secondSemStatisticsStudents,
  thirdSemStatisticsStudents,
  fourthSemStatisticsStudents,
  fifthSemStatisticsStudents,
  sixthSemStatisticsStudents
} = require("../controllers/statisticsController");

//get all statistics students result
router.get("/", statisticsStudents);

//get all firstsem statistics student result
router.get("/firstsem", firstSemStatisticsStudents);

//get all secondsem statistics student result
router.get("/secondsem", secondSemStatisticsStudents);

//get all thirdsem statistics student result
router.get("/thirdsem", thirdSemStatisticsStudents);

//get all fourthsem statistics student result
router.get("/fourthsem", fourthSemStatisticsStudents);

//get all fifthsem statistics student result
router.get("/fifthsem", fifthSemStatisticsStudents);

//get all sixthsem statistics student result
router.get("/sixthsem", sixthSemStatisticsStudents);

module.exports = router;

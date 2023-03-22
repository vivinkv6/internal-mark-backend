const express = require("express");
const router = express.Router();
const {
    historyStudents,
    firstSemHistoryStudents,
    secondSemHistoryStudents,
    thirdSemHistoryStudents,
    fourthSemHistoryStudents,
    fifthSemHistoryStudents,
    sixthSemHistoryStudents
} = require("../controllers/historyController");

//get all history students result
router.get("/", historyStudents);

//get all firstsem history student result
router.get("/firstsem", firstSemHistoryStudents);

//get all secondsem history student result
router.get("/secondsem", secondSemHistoryStudents);

//get all thirdsem history student result
router.get("/thirdsem", thirdSemHistoryStudents);

//get all fourthsem history student result
router.get("/fourthsem", fourthSemHistoryStudents);

//get all fifthsem history student result
router.get("/fifthsem", fifthSemHistoryStudents);

//get all sixthsem history student result
router.get("/sixthsem", sixthSemHistoryStudents);

module.exports = router;

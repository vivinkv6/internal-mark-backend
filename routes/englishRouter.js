const express = require("express");
const router = express.Router();
const {
    englishStudents,
firstSemEnglishStudents,
secondSemEnglishStudents,
thirdSemEnglishStudents,
fourthSemEnglishStudents,
fifthSemEnglishStudents,
sixthSemEnglishStudents
} = require("../controllers/englishController");

//get all economics students result
router.get("/", englishStudents);

//get all firstsem economics student result
router.get("/firstsem", firstSemEnglishStudents);

//get all secondsem economics student result
router.get("/secondsem", secondSemEnglishStudents);

//get all thirdsem economics student result
router.get("/thirdsem", thirdSemEnglishStudents);

//get all fourthsem economics student result
router.get("/fourthsem", fourthSemEnglishStudents);

//get all fifthsem economics student result
router.get("/fifthsem", fifthSemEnglishStudents);

//get all sixthsem economics student result
router.get("/sixthsem", sixthSemEnglishStudents);

module.exports = router;
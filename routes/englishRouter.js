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

//get all english students result
router.get("/", englishStudents);

//get all firstsem english student result
router.get("/firstsem", firstSemEnglishStudents);

//get all secondsem english student result
router.get("/secondsem", secondSemEnglishStudents);

//get all thirdsem english student result
router.get("/thirdsem", thirdSemEnglishStudents);

//get all fourthsem english student result
router.get("/fourthsem", fourthSemEnglishStudents);

//get all fifthsem english student result
router.get("/fifthsem", fifthSemEnglishStudents);

//get all sixthsem english student result
router.get("/sixthsem", sixthSemEnglishStudents);

module.exports = router;

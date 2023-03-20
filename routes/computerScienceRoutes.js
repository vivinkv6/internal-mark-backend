const express=require('express');
const internalMarks=require('../models/semesterModel');
const router=express.Router();
const {computerScienceStudents,computerScienceStudent}=require('../controllers/computerScienceController');

//get all computer science students result
router.get('/',computerScienceStudents)

//get a computer science student result

router.get('/:id',computerScienceStudent)




module.exports=router;
const express=require('express');
const  mongoose  = require('mongoose');
const router=express.Router();
const firstSemester=require('../models/firstSemModel');

//get all students result
router.get('/',async(req,res)=>{

    const data=await firstSemester.find({});

    if(!data.length > 0)
    {
        return res.json({mssg:"empty database"});
    }
    res.json(data);

})

//get a student result

router.get('/:id',async(req,res)=>{

    const{id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.json({err:"invalid id"});
    }
    const data=await firstSemester.findById({_id:id});

    if(!data)
    {
        return res.json({err:"ID not found"});
    }

    res.json({data});

})


//add results

router.post('/',async(req,res)=>{
    
    const {name,register_no,internal,subject1,assignment,seminar,attendence,internalMark,total}=req.body
    const data=await firstSemester.create({name:name,register_no:register_no,internal:internal,subject1:subject1,assignment:assignment,seminar:seminar,attendence:attendence,internalMark:internalMark,total:total});
    res.json(data);
})

//delete all students result

router.delete("/",async(req,res)=>{
    const removeData=await firstSemester.deleteMany();
    if(!removeData.length > 0)
    {
        return res.json({err:"Empty data"});
    }
    res.json({removeData});
})

module.exports=router;
const  mongoose  = require('mongoose');
const internalMarks=require('../models/semesterModel');


const computerScienceStudents=async(req,res)=>{

    const data=await internalMarks.find({});

    if(!data.length > 0)
    {
        return res.json({mssg:"empty database"});
    }
    res.json(data);

}

const computerScienceStudent=async(req,res)=>{

    const{id}=req.params;

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.json({err:"invalid id"});
    }
    const data=await internalMarks.findById({_id:id});

    if(!data)
    {
        return res.json({err:"ID not found"});
    }

    res.json({data});

}




module.exports={
    computerScienceStudents,
    computerScienceStudent
}




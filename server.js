require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const internalMarks=require('./models/semesterModel')
const computerScienceRouter = require("./routes/computerScienceRoutes");

app.use(express.json());
app.use(cors());

app.post('/api/add',async(req,res)=>{
    
  const {name,register_no,subjectCode,subject,department,assignment,seminar,attendence,internalMark,total}=req.body
  const data=await internalMarks.create({name:name,register_no:register_no,subjectCode:subjectCode,subject:subject,department:department,assignment:assignment,seminar:seminar,attendence:attendence,internalMark:internalMark,total:total});
  res.json(data);
})

app.use("/api/computerscience", computerScienceRouter);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server and Database run successfully");
    });
  })
  .catch((err) => {
    throw err;
  });

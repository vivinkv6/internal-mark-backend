require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const computerScienceRouter = require("./routes/computerScienceRouter");
const statisticsRouter = require("./routes/statisticsRouter");
const mathsRouter = require("./routes/mathsRouter");
const psychologyRouter = require("./routes/psychologyRouter");
const economics = require("./routes/economicsRouter");
const english = require("./routes/englishRouter");
const hindi = require("./routes/hindiRouter");
const history = require("./routes/historyRouter");
const malayalam=require('./routes/malayalamRouter');
const politicalScience=require('./routes/politicalScienceRouter');
const sanskrit=require('./routes/sanskritRouter');
const internalmarks = require("./models/semesterModel");

app.use(express.json());
app.use(cors());



//add students marks
try {
  app.post("/add", async (req, res) => {
    const {
      name,
      register_no,
      subjectCode,
      subject,
      department,
      semester,
      assignment,
      seminar,
      attendence,
      internal,
      total,
    } = req.body;
    const data = await internalmarks.create({
      name,
      register_no,
      subjectCode,
      subject,
      department,
      semester,
      assignment,
      seminar,
      attendence,
      internal,
      total
    });
    res.json("submit successfully");
  });
} catch (err) {
  res.json({ err: "something went wrong please try again later" });
}


//get a student result
app.post("/result", async (req, res) => {
  const { register_no, department, semester } = req.body;
  const data = await internalmarks.findOne({
    register_no,
    department,
    semester,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
});

app.use("/api/computerscience", computerScienceRouter);
app.use("/api/statistics", statisticsRouter);
app.use("/api/maths", mathsRouter);
app.use("/api/psychology", psychologyRouter);
app.use("/api/economics", economics);
app.use("/api/english", english);
app.use("/api/hindi", hindi);
app.use("/api/history", history);
app.use("/api/malayalam", malayalam);
app.use("/api/politicalscience", politicalScience);
app.use("/api/sanskrit", sanskrit);


//mongodb connection
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

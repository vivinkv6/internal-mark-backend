require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const computerScienceRouter = require("./routes/computerScienceRoutes");
const statisticsRouter = require("./routes/statisticsRoutes");
const mathsRouter = require("./routes/mathsRouter");
const psychologyRouter = require("./routes/psychologyRouter");
const internalmarks = require("./models/semesterModel");

app.use(express.json());
app.use(cors());
//add students marks
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
    total,
  });
  res.json("submit successfully");
});

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

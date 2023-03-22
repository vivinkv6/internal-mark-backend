const mongoose = require("mongoose");
const internalmarks = require("../models/semesterModel");

//get all Hindi student results

const hindiStudents = async (req, res) => {
  const data = await internalmarks
    .find({ department: "Hindi" })
    .sort({ createdAt: -1 });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get first sem Hindi student results

const firstSemHindiStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Hindi",
    semester: 1,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get second sem Hindi student results

const secondSemHindiStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Hindi",
    semester: 2,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get third sem Hindi student results

const thirdSemHindiStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Hindi",
    semester: 3,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fourth sem Hindi student results

const fourthSemHindiStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Hindi",
    semester: 4,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fifth sem Hindi student results

const fifthSemHindiStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Hindi",
    semester: 5,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get sixth sem Hindi student results

const sixthSemHindiStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Hindi",
    semester: 6,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

module.exports = {
  hindiStudents,
  firstSemHindiStudents,
  secondSemHindiStudents,
  thirdSemHindiStudents,
  fourthSemHindiStudents,
  fifthSemHindiStudents,
  sixthSemHindiStudents
};

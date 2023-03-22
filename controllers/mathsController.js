const mongoose = require("mongoose");
const internalmarks = require("../models/semesterModel");

//get all mathematics student results

const mathsStudents = async (req, res) => {
  const data = await internalmarks
    .find({ department: "Mathematics" })
    .sort({ createdAt: -1 });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get first sem mathematics student results

const firstSemMathsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Mathematics",
    semester: 1,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get second sem mathematics student results

const secondSemMathsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Mathematics",
    semester: 2,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get third sem mathematics student results

const thirdSemMathsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Mathematics",
    semester: 3,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fourth sem mathematics student results

const fourthSemMathsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Mathematics",
    semester: 4,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fifth sem mathematics student results

const fifthSemMathsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Mathematics",
    semester: 5,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get sixth sem mathematics student results

const sixthSemMathsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Mathematics",
    semester: 6,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

module.exports = {
 mathsStudents,
 firstSemMathsStudents,
 secondSemMathsStudents,
 thirdSemMathsStudents,
 fourthSemMathsStudents,
 fifthSemMathsStudents,
 sixthSemMathsStudents
};

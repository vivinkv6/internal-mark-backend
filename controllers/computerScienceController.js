const mongoose = require("mongoose");
const internalmarks = require("../models/semesterModel");

//get all computer science student results

const computerScienceStudents = async (req, res) => {
  const data = await internalmarks
    .find({ department: "Computer Science" })
    .sort({ createdAt: -1 });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get first sem computer science student results

const firstSemComputerScienceStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Computer Science",
    semester: 1,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get second sem computer science student results

const secondSemComputerScienceStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Computer Science",
    semester: 2,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get third sem computer science student results

const thirdSemComputerScienceStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Computer Science",
    semester: 3,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fourth sem computer science student results

const fourthSemComputerScienceStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Computer Science",
    semester: 4,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fifth sem computer science student results

const fifthSemComputerScienceStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Computer Science",
    semester: 5,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get sixth sem computer science student results

const sixthSemComputerScienceStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Computer Science",
    semester: 6,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

module.exports = {
  computerScienceStudents,
  firstSemComputerScienceStudents,
  secondSemComputerScienceStudents,
  thirdSemComputerScienceStudents,
  fourthSemComputerScienceStudents,
  fifthSemComputerScienceStudents,
  sixthSemComputerScienceStudents
};

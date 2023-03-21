const mongoose = require("mongoose");
const internalmarks = require("../models/semesterModel");

//get all psychology student results

const psychologyStudents = async (req, res) => {
  const data = await internalmarks
    .find({ department: "Psychology" })
    .sort({ createdAt: -1 });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get first sem psychology student results

const firstSemPsychologyStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Psychology",
    semester: 1,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get second sem psychology student results

const secondSemPsychologyStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Psychology",
    semester: 2,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get third sem psychology student results

const thirdSemPsychologyStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Psychology",
    semester: 3,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fourth sem psychology student results

const fourthSemPsychologyStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Psychology",
    semester: 4,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fifth sem psychology student results

const fifthSemPsychologyStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Psychology",
    semester: 5,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get sixth sem psychology student results

const sixthSemPsychologyStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Psychology",
    semester: 6,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

module.exports = {
 psychologyStudents,
 firstSemPsychologyStudents,
 secondSemPsychologyStudents,
 thirdSemPsychologyStudents,
 fourthSemPsychologyStudents,
 fifthSemPsychologyStudents,
 sixthSemPsychologyStudents
};

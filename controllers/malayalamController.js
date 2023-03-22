const mongoose = require("mongoose");
const internalmarks = require("../models/semesterModel");

//get all malayalam student results

const malayalamStudents = async (req, res) => {
  const data = await internalmarks
    .find({ department: "Malayalam" })
    .sort({ createdAt: -1 });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get first sem Malayalam student results

const firstSemMalayalamStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Malayalam",
    semester: 1,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get second sem Malayalam student results

const secondSemMalayalamStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Malayalam",
    semester: 2,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get third sem Malayalam student results

const thirdSemMalayalamhStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Malayalam",
    semester: 3,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fourth sem Malayalam student results

const fourthSemMalayalamStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Malayalam",
    semester: 4,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fifth sem Malayalam student results

const fifthSemMalayalamStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Malayalam",
    semester: 5,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get sixth sem Malayalam student results

const sixthSemMalayalamStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Malayalam",
    semester: 6,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

module.exports = {
 malayalamStudents,
 firstSemMalayalamStudents,
 secondSemMalayalamStudents,
 thirdSemMalayalamhStudents,
 fourthSemMalayalamStudents,
 fifthSemMalayalamStudents,
 sixthSemMalayalamStudents
};

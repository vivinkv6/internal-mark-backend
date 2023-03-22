const mongoose = require("mongoose");
const internalmarks = require("../models/semesterModel");

//get all Sanskrit student results

const sanskritStudents = async (req, res) => {
  const data = await internalmarks
    .find({ department: "Sanskrit" })
    .sort({ createdAt: -1 });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get first sem Sanskrit student results

const firstSemSanskritStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Sanskrit",
    semester: 1,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get second sem Sanskrit student results

const secondSemSanskritStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Sanskrit",
    semester: 2,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get third sem Sanskrit student results

const thirdSemSanskritStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Sanskrit",
    semester: 3,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fourth sem Sanskrit student results

const fourthSemSanskritStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Sanskrit",
    semester: 4,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fifth sem Sanskrit student results

const fifthSemSanskritStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Sanskrit",
    semester: 5,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get sixth sem Sanskrit student results

const sixthSemSanskritStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Sanskrit",
    semester: 6,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

module.exports = {
 sanskritStudents,
 firstSemSanskritStudents,
 secondSemSanskritStudents,
 thirdSemSanskritStudents,
 fourthSemSanskritStudents,
 fifthSemSanskritStudents,
 sixthSemSanskritStudents
};

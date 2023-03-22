const mongoose = require("mongoose");
const internalmarks = require("../models/semesterModel");

//get all economics student results

const economicsStudents = async (req, res) => {
  const data = await internalmarks
    .find({ department: "Economics" })
    .sort({ createdAt: -1 });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get first sem economics student results

const firstSemEconomicsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Economics",
    semester: 1,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get second sem economics student results

const secondSemEconomicsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Economics",
    semester: 2,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get third sem economics student results

const thirdSemEconomicsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Economics",
    semester: 3,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fourth sem economics student results

const fourthSemEconomicsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Economics",
    semester: 4,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fifth sem economics student results

const fifthSemEconomicsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Economics",
    semester: 5,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get sixth sem economics student results

const sixthSemEconomicsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Economics",
    semester: 6,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

module.exports = {
 economicsStudents,
 firstSemEconomicsStudents,
 secondSemEconomicsStudents,
 thirdSemEconomicsStudents,
 fourthSemEconomicsStudents,
 fifthSemEconomicsStudents,
 sixthSemEconomicsStudents
};

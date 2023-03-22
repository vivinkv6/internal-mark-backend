const mongoose = require("mongoose");
const internalmarks = require("../models/semesterModel");

//get all History student results

const historyStudents = async (req, res) => {
  const data = await internalmarks
    .find({ department: "History" })
    .sort({ createdAt: -1 });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get first sem History student results

const firstSemHistoryStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "History",
    semester: 1,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get second sem History student results

const secondSemHistoryStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "History",
    semester: 2,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get third sem History student results

const thirdSemHistoryStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "History",
    semester: 3,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fourth sem History student results

const fourthSemHistoryStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "History",
    semester: 4,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fifth sem History student results

const fifthSemHistoryStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "History",
    semester: 5,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get sixth sem History student results

const sixthSemHistoryStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "History",
    semester: 6,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

module.exports = {
  historyStudents,
  firstSemHistoryStudents,
  secondSemHistoryStudents,
  thirdSemHistoryStudents,
  fourthSemHistoryStudents,
  fifthSemHistoryStudents,
  sixthSemHistoryStudents
};

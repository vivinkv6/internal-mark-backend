const mongoose = require("mongoose");
const internalmarks = require("../models/semesterModel");

//get all statistics student results

const statisticsStudents = async (req, res) => {
  const data = await internalmarks
    .find({ department: "Statistics" })
    .sort({ createdAt: -1 });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get first sem statistics student results

const firstSemStatisticsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Statistics",
    semester: 1,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get second sem statistics student results

const secondSemStatisticsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Statistics",
    semester: 2,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get third sem statistics student results

const thirdSemStatisticsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Statistics",
    semester: 3,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fourth sem statistics student results

const fourthSemStatisticsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Statistics",
    semester: 4,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fifth sem statistics student results

const fifthSemStatisticsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Statistics",
    semester: 5,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get sixth sem statistics student results

const sixthSemStatisticsStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Statistics",
    semester: 6,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

module.exports = {
  statisticsStudents,
  firstSemStatisticsStudents,
  secondSemStatisticsStudents,
  thirdSemStatisticsStudents,
  fourthSemStatisticsStudents,
  fifthSemStatisticsStudents,
  sixthSemStatisticsStudents,
};

const mongoose = require("mongoose");
const internalmarks = require("../models/semesterModel");

//get all PoliticalScience student results

const politicalScienceStudents = async (req, res) => {
  const data = await internalmarks
    .find({ department: "Political Science" })
    .sort({ createdAt: -1 });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get first sem PoliticalScience student results

const firstSemPoliticalScienceStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Political Science",
    semester: 1,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get second sem PoliticalScience student results

const secondSemPoliticalScienceStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Political Science",
    semester: 2,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get third sem PoliticalScience results

const thirdSemPoliticalScienceStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Political Science",
    semester: 3,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fourth sem PoliticalScience student results

const fourthSemPoliticalScienceStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Political Science",
    semester: 4,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fifth sem PoliticalScience student results

const fifthSemPoliticalScienceStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Political Science",
    semester: 5,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get sixth sem PoliticalScience student results

const sixthSemPoliticalScienceStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "Political Science",
    semester: 6,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

module.exports = {
  politicalScienceStudents,
  firstSemPoliticalScienceStudents,
  secondSemPoliticalScienceStudents,
  thirdSemPoliticalScienceStudents,
  fourthSemPoliticalScienceStudents,
  fifthSemPoliticalScienceStudents,
  sixthSemPoliticalScienceStudents
};
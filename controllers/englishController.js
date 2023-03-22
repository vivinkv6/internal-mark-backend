const mongoose = require("mongoose");
const internalmarks = require("../models/semesterModel");

//get all english student results

const englishStudents = async (req, res) => {
  const data = await internalmarks
    .find({ department: "English" })
    .sort({ createdAt: -1 });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get first sem english student results

const firstSemEnglishStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "English",
    semester: 1,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get second sem english student results

const secondSemEnglishStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "English",
    semester: 2,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get third sem english student results

const thirdSemEnglishStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "English",
    semester: 3,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fourth sem english student results

const fourthSemEnglishStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "English",
    semester: 4,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get fifth sem english student results

const fifthSemEnglishStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "English",
    semester: 5,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

//get sixth sem english student results

const sixthSemEnglishStudents = async (req, res) => {
  const data = await internalmarks.find({
    department: "English",
    semester: 6,
  });
  if (data.length == 0) {
    return res.json({ mssg: "No Result" });
  }
  res.json(data);
};

module.exports = {
  englishStudents,
  firstSemEnglishStudents,
  secondSemEnglishStudents,
  thirdSemEnglishStudents,
  fourthSemEnglishStudents,
  fifthSemEnglishStudents,
  sixthSemEnglishStudents,
};

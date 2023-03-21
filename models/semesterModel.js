const mongoose = require("mongoose");

const schema = mongoose.Schema;

const semesterSchema = new schema(
  {
    name: {
      type: String,
      required: true,
    },
    register_no: {
      type: String,
      required: true,
    },
    department: {
      type: String,
      required: true,
    },
    semester: {
      type: Number,
    },
    subject: {
      type: String,
    },
    subjectCode: {
      type: String,
    },

    assignment: {
      type: Number,
    },
    seminar: {
      type: Number,
    },
    attendence: {
      type: Number,
    },
    internal: {
      type: Number,
    },
    total: {
      type: Number,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("internalmarks", semesterSchema);

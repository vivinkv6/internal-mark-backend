const mongoose = require("mongoose");

const schema = mongoose.Schema;

const firstSemSchema = new schema(
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
    internalMark: {
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

module.exports = mongoose.model("internalMarks", firstSemSchema);

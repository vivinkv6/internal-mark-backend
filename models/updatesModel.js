const mongoose = require("mongoose");

const schema = mongoose.Schema;

const updateSchema = new schema(
  {
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("updates", updateSchema);

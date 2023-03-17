require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const firstSemRouter = require("./routes/firstSemRoutes");

app.use(express.json());
app.use(cors());
app.use("/api", firstSemRouter);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("server and Database run successfully");
    });
  })
  .catch((err) => {
    throw err;
  });

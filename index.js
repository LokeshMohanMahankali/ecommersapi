const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Databaseconncetion is successfull"))
  .catch((err) => console.log(err));

// userroute
app.use(express.json());
app.use("/api/users", userRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is running on port 5000");
});

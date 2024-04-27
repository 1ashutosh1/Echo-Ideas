import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from './routes/user.route.js';

dotenv.config();

mongoose
  .connect(process.env.MONGOURL)
  .then(() => {
    console.log("MongoDB is connected");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.use("/api/user", userRoutes);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

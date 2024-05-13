import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from 'cors';
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import postRoutes from "./routes/post.route.js";
import commentRoutes from "./routes/comment.route.js";

const app = express();

dotenv.config();
mongoose
.connect(process.env.MONGOURL)
.then(() => {
  console.log("MongoDB is connected");
})
.catch((err) => {
  console.log(err);
});

app.use(express.json());
app.use(
  cors({
    origin: [`https://echo-ideas.vercel.app/`],
    credentials: true,
    methods: ["GET", "POST", "DELETE", "PUT", "UPDATE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }));

  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", 'https://echo-ideas.vercel.app/');
    res.setHeader("Access-Control-Allow-Methods", "POST, GET,DELETE, PUT, UPDATE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });

app.use(cookieParser());

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// import express from "express";
// import dotenv from "dotenv";
// import { connectDb } from "./database/db.js";
// import Razorpay from "razorpay";
// import cors from "cors";
// import path from "path";

// dotenv.config();

// export const instance = new Razorpay({
//   key_id: process.env.Razorpay_Key,
//   key_secret: process.env.Razorpay_Secret,
// });

// const app = express();

// // using middlewares
// app.use(express.json());
// app.use(cors());

// const port = 5000;

// app.get("/", (req, res) => {
//   res.send("Server is working");
// });

// app.use("/uploads", express.static("uploads"));

// // importing routes
// import userRoutes from "./routes/user.js";
// import courseRoutes from "./routes/course.js";
// import adminRoutes from "./routes/admin.js";

// // using routes
// app.use("/api", userRoutes);
// app.use("/api", courseRoutes);
// app.use("/api", adminRoutes);

// const __dirname = path.resolve();

// if(process.env.NODE_ENV === "production")
// {
//     // app.use(express.static(path.join(__dirname,"/frontend/build")));
//     app.get("*", (req,res) => res.sendFile(path.resolve(__dirname,"frontend","index.html")) );
// }

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
//   connectDb();
// });

import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import Razorpay from "razorpay";
import path from "path";

// Load environment variables
dotenv.config();

// Create Razorpay instance
export const instance = new Razorpay({
  key_id: process.env.Razorpay_Key,
  key_secret: process.env.Razorpay_Secret,
});

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to Database
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database Connected Successfully");
  } catch (error) {
    console.error("❌ Database Connection Error:", error);
    process.exit(1);
  }
};

// Routes
import userRoutes from "./routes/user.js";
import courseRoutes from "./routes/course.js";
import adminRoutes from "./routes/admin.js";

// Use Routes
app.use("/api", userRoutes);
app.use("/api", courseRoutes);
app.use("/api", adminRoutes);

// Serve Static Files in Production
const __dirname = path.resolve();
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "frontend", "index.html")));
}

// Root Endpoint
app.get("/", (req, res) => {
  res.send("🚀 Server is running successfully!");
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  console.log(`🔥 Server is running on http://localhost:${PORT}`);
  await connectDb();
});

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//user Routes
app.use("/api/v1/users", require("./routes/userRoutes"));

//transection routes
app.use("/api/v1/transection", require("./routes/transectionRoutes"));

//static files
app.use(express.static(path.join(__dirname, './client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'./client/build/index.html'));
})

mongoose
  .connect(
    process.env.MONGO_URL ||
      "mongodb+srv://jayuhatte3848:ZpmhqsZ6CkBD2rWl@cluster0.j8rikdz.mongodb.net/expenseApp"
  )
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

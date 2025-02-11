import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoute from "@routes/userRoute";
import authRoute from "@routes/authRoute";
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// Register routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.get("/health", (req, res) => {
    res.send("Health Check");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

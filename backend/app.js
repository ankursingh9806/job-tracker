require("dotenv").config();

const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const mongoose = require("./utils/database");

const userRoute = require("./routes/userRoute");
const homeRoute = require("./routes/homeRoute");
const profileRoute = require("./routes/profileRoute");
const jobApplicationRoute = require("./routes/jobApplicationRoute");
const jobSearchRoute = require("./routes/jobSearchRoute");
const reminderRoute = require("./routes/reminderRoute");
const settingsRoute = require("./routes/settingsRoute");

const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, "access.log"), { flags: "a" });
app.use(morgan("combined", { stream: accessLogStream }));

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "https://cdn.jsdelivr.net", "https://cdn.socket.io"],
            styleSrc: ["'self'", "https://cdn.jsdelivr.net", "'unsafe-inline'"],
        }
    }
}));

app.use(express.static(path.join(__dirname, "..", "frontend")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
}))

app.use("/user", userRoute);
app.use("/home", homeRoute);
app.use("/profile", profileRoute);
app.use("/job-application", jobApplicationRoute);
app.use("/job-search", jobSearchRoute);
app.use("/reminder", reminderRoute);
app.use("/settings", settingsRoute);

app.use((req, res) => {
    res.sendFile(path.join(__dirname, "..", "frontend", "html", "jobTracker.html"));
});

app.listen(3000, () => {
    console.log("server is running on port 3000");
});
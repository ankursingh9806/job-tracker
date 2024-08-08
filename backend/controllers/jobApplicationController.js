const path = require("path");

const jobApplicationPage = async (req, res, next) => {
    try {
        res.sendFile(path.join(__dirname, "..", "..", "frontend", "html", "jobApplication.html"));
    } catch (err) {
        console.error("error:", err);
        res.status(500).json({ error: "internal server error" });
    }
};

module.exports = {
    jobApplicationPage,
}
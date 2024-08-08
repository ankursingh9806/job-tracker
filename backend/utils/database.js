const mongoose = require("mongoose");

mongoose.connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log("Node.js application is connected to MongoDB")
    })
    .catch((err) => {
        console.error("unable to connect to MongoDB", err);
    });

module.exports = mongoose;
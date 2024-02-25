

const mongoose = require("mongoose");

// const username = "priyakumariyt05";
// const password = encodeURIComponent("Priya123@");
// const cluster = "cluster";
// const database = "mern_Admin";

// const URI = `mongodb+srv://${username}:${password}@${cluster}.egq7rvr.mongodb.net/${database}?retryWrites=true&w=majority`;
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("Connection to the database successful");
    } catch (error) {
        console.error("Connection to the database failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDb;






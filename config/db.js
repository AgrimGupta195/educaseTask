const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();
exports.connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
    }           
}         
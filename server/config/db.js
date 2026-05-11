const mongoose = require('mongoose');

// You MUST add 'async' here
const connectDB = async () => {
    try {
        // Now 'await' will work
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
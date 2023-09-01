const mongoose = require('mongoose')
const dotenv = require("dotenv")
dotenv.config()

const connectDB = async () => {
    try {
        const connectDB = await mongoose.connect(process.env.DATABASE_URL)
        console.log('Database connection established')
    } catch (error) {
        console.error(error)
    }
}

module.exports = connectDB
const mongoose = require('mongoose');
const Book = require('./bookModel.model');

const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        favouritesBooks: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Book'
        }]
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model("User", userSchema);
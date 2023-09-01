const mongoose = require('mongoose')

const bookSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        cover_img: {
            type: String,
        },
        authors: [{
            type: String,
        }],
        year: {
            type: Number,
        }
    }, 
    {
        timestamps: true
    }
)

module.exports = mongoose.model("Book", bookSchema);
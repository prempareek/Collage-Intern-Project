const mongoose = require('mongoose');

const college = new mongoose.Schema({

        name: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        fullName: {
            type: String,
            required: true,
            trim: true
        },

        logoLink: {
            type: String,
            required: true,
            unique:true

        },
        isDeleted: { type: Boolean, default: false }
    },


    { timestamps: true })




module.exports = mongoose.model('collegeNames', college)
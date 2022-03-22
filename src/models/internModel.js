const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const Interns = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,

    },

    email: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    mobile: {
        type: Number,
        required: true,
        min: 100000000,
        max: 999999999,
        trim: true,
        unique: true
    },
    collegeId: {
        type: ObjectId,
        ref: "collegeModel",
        required: true,
        trim: true
    },

    isDeleted: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

module.exports = mongoose.model('intern', Interns)
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
    mobile:  {
        type: Number,
        required: true,
        trim: true,
        unique: true,
        match:[/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/,'not valid mobile number']
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
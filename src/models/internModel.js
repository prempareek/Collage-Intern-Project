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
        trim: true,
        unique: true,
        validate: {
        validator: function(v) {
        return /^[0-9]{10}$/.test(v);
         },
        message: '{VALUE} is not a valid phone number!'
                      
        } 
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
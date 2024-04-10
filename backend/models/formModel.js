const mongoose = require("mongoose");

const FormSchema = new mongoose.Schema({
    id: {
        type: String,
        unique: true
    },
    youAre: {
        type: String,
        required: true,
    },
    youHave: {
        type: String,
        required: false,
    },
    typeOfProject: {
        type: String,
        required: true,
    },
    budget: {
        type: String,
        required: true,
    },
},
    {
        timestamps: { createdAt: 'createdAt' },
        toJSON: {
            minimize: false,
        }
    });


module.exports = mongoose.model("Forms", FormSchema);
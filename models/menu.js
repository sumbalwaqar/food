const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    size:{
        type: String,
        enum: ['Small', 'Medium', 'Large'],
        required: true,
        default: "Medium"
    }
},
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Menu', menuSchema);
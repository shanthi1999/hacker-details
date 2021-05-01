const mongoose = require("mongoose");

const hackerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    Age:{
        type:Number,
        required:true
    },
    Qualification:{
        type:String,
        required:true
    },
    hackerType:{
        type:String,
        required:true
    },
    subscribed:{
        type:Boolean,
        required:true,
        default:false
    }
})

module.exports = mongoose.model('hackerDetails',hackerSchema);
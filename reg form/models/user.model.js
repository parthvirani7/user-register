const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        trim:true,
    },
    LastName:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
    },
    password:{
        type:String,
        trim:true,
    }
});

const user = mongoose.model("user",userSchema);

module.exports = user;

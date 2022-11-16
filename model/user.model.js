const mongoose = require("mongoose");

const { Schema } = mongoose;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};


//declaring the schema and its requirement.
const userschema = new Schema({
    fullName:{
        type: String,
        maxLength: 50,
        default:""
    },
    userName:{
        type: String,
        unique: true,
        required: true,
        maxLength: 25
    },
    email:{
        type: String,
        unique: true,
        required: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    }
});


//using the schema and naming the collection.

const users = mongoose.model("user",userschema);

module.exports = users;
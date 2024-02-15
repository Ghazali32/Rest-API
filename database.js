const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://shazebansari2536:Ghazal32@ghazali.ye8bn9j.mongodb.net/Test-Api');

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
    },
    age : {
        type : Number,
        required : true
    },
    country : {
        type : String,
        required : true
    },
})

const User = mongoose.model('User' , userSchema)

module.exports = User;
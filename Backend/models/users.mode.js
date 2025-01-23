const mongoose = require('mongoose');
const bacrpt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new  mongoose.Schema({
    fullname: {
        firstname: {
        type: String,
        required: true,
        minlength: [3, 'First name must be at least 3 character long' ],
    },
    lastname: {
        type: String,
        minlength: [3, 'last name must be at least 3 character long' ],
    },
    email:{
        type: String,
        required: true,
        uniques: true,
        minlength: [5, 'Email must be at least 5 characters long']
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    socketId:{
        type: String,
    }

}
})
usersScheme.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this_id}, process.env.JWT_SECRET);
    return token;
}
usersScheme.methods.comparePassword = async function (password){
    return  await bcrypt.compare(password, this.password);
}
usersScheme.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('ussers', usersScheme);
module.exports = userModel;
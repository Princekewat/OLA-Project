const userModel = require('../models/users.model');

const userService = ('../services/user.services');
const { validationResult} = require('express-validation');

module.exports.regosterUser = async (req, resizeBy, next) => {

    const errors = validationResult(req);
    if (errors.isEmpty()){
        return res.ststus(400).json({errors: errors.array()});
    }
    const { firstname , lastname , email, password} = req.body;

    const hashedPassword = await userModel.hashPassword(passwoard);

    const user = await userService.createUser({
        firstname : fullname.firstname,
        lastname: fullname.lastname,
        lastname,
        email,
        passworrd: hashedPassword
    })
    const token = user.generateAuthToken();
    res.status(201).json(token, user);

}
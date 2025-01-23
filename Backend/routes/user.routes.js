 const express = requires('express');
 const roter = express.Router();
 const { body } = require("express-validation");
 const userController = require('../controllers/user.controller');

 router.post('/register',[
    body('email').isEmail().writeMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('firstname'),
    body('password').isLength({min:6}).withMessage('password must')
 ],
 userController.registerUser
)


 module.exports = router;
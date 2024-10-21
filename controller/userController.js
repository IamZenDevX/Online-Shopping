const ErrorHandler = require('../utils/default/errorHandler');
const bcrypt = require('bcryptjs');
const user = require('../models/userModel');
const {sendMail} = require("../utils/user")
// const dotenv = require('dotenv');
 


exports.AddUser = async (req, res, next) => {
    const { contactno, email, gender, password, username } = req.body;
    let createduser;
    createduser = new user({
        username,
        gender,
        contactno,
        email,
        password,
    });
    await createduser.save();
    res.json(createduser);



}

exports.Delete_User = async (req, res, next) => {
    const { userid } = req.params;
    try {
        const deleteduser = await user.findByIdAndDelete(userid);
    } catch (err) {
        const error = new ErrorHandler(
            'user is not Deleted !',
            400
        );
        return next(error);
    }
    console.log("User Successfully Deleted !!");



}

exports.Find_All_Users = async (req, res, next) => {
    let Find_All_Users;
    try {
        Find_All_Users = await user.find({}, 'password contactno email username gender ');
    } catch (err) {
        const error = new ErrorHandler(
            'All User Not Found! Enter Valid User..',
            400
        );
        return next(error);
    }
    res.json(Find_All_Users);



}

exports.Find_User = async (req, res, next) => {
    const { userid } = req.params;
    let finduser;
    try {
        finduser = await user.findById(userid, 'gender contactno email username password ');
    } catch (err) {
        const error = new ErrorHandler(
            'User Not Found! Enter Valid User..',
            400
        );
        return next(error);
    }
    res.json(finduser);



}

exports.Login = async (req, res, next) => {
    const { email, password } = req.body;
    let existingUser;
    try {
        existingUser = await user.findOne(
            {
                email
            }, 'password email ');
    } catch (err) {
        const error = new ErrorHandler(
            'Signing up failed, please try again later.',
            422
        );
        return next(error);
    }
    if (!existingUser) {
        const error = new ErrorHandler(
            'User not exists with this email',
            422
        );
        return next(error);

    }
    else {
    }
    let isValidPassword = false;
    try {
        isValidPassword = await bcrypt.compare(password, existingUser.password);
        // console.log(existingUser)
        // console.log(password)
        // console.log(existingUser.password)
        console.log(isValidPassword)
    } catch (err) {
        const error = new ErrorHandler(
            'Could not log you in, please check your credentials and try again.',
            500
        );
        console.log(error)
    }
    if (!isValidPassword) {
        const error = new ErrorHandler(
            'Invalid credentials, could not log you in.',
            401
        );
        return next(error);

    }
    else {
        
        try {
            await sendMail(email, 'Verify Email', `Your email is verifed`);
            
            res.status(200).json({ success: true, message: 'Password reset email sent' });
            
            res.json("login successfull!!");
        } catch (error) {
            console.error('Error sending password reset email:', error);
            console.log(error)
            return next(new ErrorHandler(500, 'Failed to send password reset email'));
        }
    }




}


exports.updateuser = async (req, res, next) => {
    const { contactno, email, gender, password, username } = req.body;
    const { userid } = req.params;
    
    try {
        const updateduser = await user.findByIdAndUpdate(userid,
            {
                gender: gender,
                contactno: contactno,
                password: password,
                email: email,
                username: username
            }
            , { new: true });
            res.json(updateduser);
    } catch (err) {
        const error = new ErrorHandler(
            'User Is not update!',
            400
        );
        return next(error);
    }



}





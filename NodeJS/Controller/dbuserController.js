const express = require('express');
const User = require('../DB/User');

exports.postUsers = async (req, res) => {
    const { firstName, lastName } = req.body;
    let user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    console.log("request user", req.body);
    console.log("user",user);
    let userModel = new User(user);
    await userModel.save();
    res.json(userModel);
};

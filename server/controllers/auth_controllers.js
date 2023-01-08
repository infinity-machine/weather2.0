const { User } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config()

function signToken(user) {
    return jwt.sign({ data: user }, process.env.JWT_SECRET, { expiresIn: '10m' })
}


function registerUser(user_to_register) {
    const token = signToken(user_to_register);
    return token
}


module.exports = {
    registerUser
}
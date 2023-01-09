const { User } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config()

function signToken(user) {
    return jwt.sign({ data: user }, process.env.JWT_SECRET, { expiresIn: '10m' })
}


async function registerUser(user_to_register) {
    const new_user = await User.create(user_to_register);
    if (!new_user) return false;
    const token_data = {
        email: new_user.email
    }
    const token = signToken(token_data);
    return token;
}

async function loginUser(user_to_login) {
    const user_data = await User.findOne({
        email: user_to_login.email
    });
    if (!user_data) return false;
    const token_data = {
        email: user_data.email
    };
    const token = signToken(token_data);
    return token;
}

module.exports = {
    registerUser, loginUser
}
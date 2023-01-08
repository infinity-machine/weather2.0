const { User } = require('../models');
const jwt = require('jsonwebtoken');


async function registerUser(user_to_register) {
    console.log(user_to_register)
}


module.exports = {
    registerUser
}
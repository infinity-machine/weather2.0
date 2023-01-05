const auth_router = require('express').Router();
const { User } = require('../models');

auth_router.post('/login', (req, res) => {
    console.log(req)
})

module.exports = auth_router;
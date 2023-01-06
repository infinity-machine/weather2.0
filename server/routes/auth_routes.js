const auth_router = require('express').Router();
const { User } = require('../models');

auth_router.post('/register', (req, res) => {
    console.log(req.body)
});

auth_router.post('/login', (req, res) => {
    console.log(req.body);
});

module.exports = auth_router;
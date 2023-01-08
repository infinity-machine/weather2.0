const auth_router = require('express').Router();
const {registerUser} = require('../controllers/auth_controllers');

auth_router.post('/register', (req, res) => {
    const token = registerUser(req.body);
    res.json(token);

});

auth_router.post('/login', (req, res) => {
    console.log(req.body);
});

module.exports = auth_router;
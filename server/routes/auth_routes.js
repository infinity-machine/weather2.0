const auth_router = require('express').Router();
const { registerUser } = require('../controllers/auth_controllers');

auth_router.post('/register', async (req, res) => {
    const token = await registerUser(req.body);
    if (!token) return res.sendStatus(400);
    res.json(token);
});

auth_router.post('/login', (req, res) => {
    console.log(req.body);
});

module.exports = auth_router;
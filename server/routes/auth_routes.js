const auth_router = require('express').Router();
const { registerUser, loginUser } = require('../controllers/auth_controllers');

auth_router.post('/register', async (req, res) => {
    const token = await registerUser(req.body);
    if (!token) return res.sendStatus(400);
    res.json(token);
});

auth_router.post('/login', async (req, res) => {
    const token = await loginUser(req.body);
    if (!token) return res.sendStatus(400);
    res.json(token);
});

module.exports = auth_router;
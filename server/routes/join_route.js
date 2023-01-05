const join_router = require('express').Router();

join_router.get('/', (req, res) => {
    res.send('lol')
})

module.exports = join_router;
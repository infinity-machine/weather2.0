const express = require('express');
const PORT = process.env.PORT || 6969;
const path = require('path');
const db = require('./config/connection');
const {
    auth_router, join_router
} = require('./routes')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/build')));
app.use('/auth', auth_router);
app.use('/join', join_router)

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`SERVER SERVING ON PORT ${PORT}`);
    });
});
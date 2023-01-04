const express = require('express');
const PORT = process.env.PORT || 6969;
const path = require('path');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../client/build')));

app.listen(PORT, () => {
    console.log(`SERVER SERVING ON PORT ${PORT}`);
});
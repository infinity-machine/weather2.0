const mongoose = require('mongoose');
const URL = process.env.ATLAS_CONNECT_URL ? process.env.ATLAS_CONNECT_URL : 'mongodb://localhost:27017/weather2'

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err) => {
    if (err) console.log(err);
    else console.log('DB CONNECT! GOOD JOB! FIVE STAR!');
  });

  module.exports = mongoose.connection;
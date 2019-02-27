'use strict';

const express = require('express');
const app = express();
const fs = require('fs');
let port = 80;

if (fs.existsSync('./.env')) {
  require('dotenv').config();
  port = process.env.PORT;
}

require('./config/express')(app);
require('./api/routes')(app, express);
module.exports = app; // for testing


app.listen(port, () => {
  console.log(`Api is running on http://${process.env.HOST}:${port}`);
});

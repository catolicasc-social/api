const express = require('express');
require('dotenv').config();

const config = require('../config').EXPRESS_CONFIG;
const routes = require('./routes');

const app = express();

app.config = config;
app.set('port', config.PORT);

app.use(routes());

module.exports = app;

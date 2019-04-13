const express = require('express');
require('dotenv').config();

const config = require('../config');
const routes = require('./routes');

const app = express();

app.config = config;
app.set('port', config.port);

app.use(routes());

module.exports = app;

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const logger = require('../config/logger');

const app = express();

logger.info('configuring express...');
app.use(morgan('combined', { stream: logger.stream }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Put here routes middlewares
logger.info('setting up routes...');
app.use('/hello', (req, res) => res.status(200).jsonp({ message: 'Hello World!!' }));

module.exports = app;

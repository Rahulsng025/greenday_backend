const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const logger = require('./utils/logger');

// creating the request handler (as an express app).
const app = express();

// MIDDLEWARES
app.use(cors());    // allowing cross origin resource sharing.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
logger.info("MIDDLEWARES INITIALIZED");

app.use('/', (request, response, next) => {
    response.status(200).json({msg: "its working."});
});

// exposing the express app (to the http server).
module.exports = app;
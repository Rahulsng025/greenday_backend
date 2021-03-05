const http = require('http');
const Express = require('./src/app');
const dotenv = require('dotenv');

// loading environment variables.
dotenv.config();

// instantiating the server.
const HTTPServer = http.createServer(Express);

// Listing on the port provided.
HTTPServer.listen(process.env.PORT);
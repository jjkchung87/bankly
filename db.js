/** Database setup for jobly. */
global.TextEncoder = require('util').TextEncoder
const { Client } = require('pg');
const { DB_URI } = require('./config');

const client = new Client(DB_URI);

client.connect();

module.exports = client;

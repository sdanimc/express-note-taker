const express = require('express');
const path = require('path');
const api = require('./routes/notes');

const app = express();
const PORT = process.env.PORT || 3001;


module.exports = app
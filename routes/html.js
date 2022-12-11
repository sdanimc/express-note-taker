const express = require('express');
const path = require('path');

const htmlRouter = express.Router();
//needs two routes: get/notes to return notes.html and get * to return index.html

htmlRouter.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/notes.html'))
);

htmlRouter.get('*', (req, res) =>
res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = htmlRouter
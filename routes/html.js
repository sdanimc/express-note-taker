const express = require('express');
const path = require('path');

const htmlRouter = express.Router();

//get /notes request returns static notes html page
htmlRouter.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/notes.html'))
);

//any get request starting with / EXCEPT /notes returns static landing page
htmlRouter.get('*', (req, res) =>
res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = htmlRouter
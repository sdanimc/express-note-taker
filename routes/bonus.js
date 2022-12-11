const express = require('express');

const app = express();
//if time add delte /api/notes/:id route that receives query parameter with id of note to delte
//to delete you need to read all notes from db.json and remove note with given id property then rewrite notes to db.json

module.exports = app
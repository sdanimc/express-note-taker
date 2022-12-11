const notes = require('express').Router();
//two API routes should be made: get /api/notes should read db.json and return all saved notes and JSOn
// second route POST /api/notes should receive a new note to save on the request body, add it to db.json, 
//and return new note to client Each note need unique id when save (npm packages could do this)

module.exports = app
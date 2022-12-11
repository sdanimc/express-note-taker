const apiRouter = require('express').Router();
//const { json } = require('express');
const fs = require('fs');
//const path = require('path');
const { join } = require('path');
const noteDB = require('../db/db.json');
//two API routes should be made: get /api/notes should read db.json and return all saved notes and JSOn
// second route POST /api/notes should receive a new note to save on the request body, add it to db.json, 
//and return new note to client Each note need unique id when save (npm packages could do this)

apiRouter.get('/notes', (req, res) => {
    fs.readFile(join(__dirname, '../db/db.json'), 'utf-8', (err, data) =>
    {
        if (err) throw err;
        res.json(JSON.parse(data));
    })
   /* fs.readFile(path.join(__dirname, '../db/db.json'), 'utf-8', (err, data) =>
    {
        if (err) throw err
        res.json(JSON.parse(data))
    })*/
    //console.info(`${req.method} request received`);
   //fs.readFile('../db/db.json').then((data) => res.json(JSON.parse(data)));
  // fs.readFile(path.join(__dirname, '../db.db.json').then((data) => res.json(JSON.parse)))
} )

//apiRouter.post

module.exports = apiRouter
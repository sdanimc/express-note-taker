const apiRouter = require('express').Router();
const fs = require('fs');
//const path = require('path');
const { join } = require('path');
const noteDB = require('../db/db.json');
//two API routes should be made: get /api/notes should read db.json and return all saved notes and JSOn
// second route POST /api/notes should receive a new note to save on the request body, add it to db.json, 
//and return new note to client Each note need unique id when save (npm packages could do this)

//currently notes in database render in left column at localhost/3000/notes but clicking does not render saved note in right section
// localhost/3000/api/notes return api raw data
//no saved notes render at localhost/3000/notes.html
apiRouter.get('/notes', (req, res) => {
    fs.readFile(join(__dirname, '../db/db.json'), 'utf-8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    })
})

apiRouter.post('/notes', (req, res) => {
    console.info(`${req.method} request recieved to add note`);
    const { title, text } = req.body;
    if (!title || !text) { throw new Error("Both note title and text fields must have content"); }
    fs.readFile(join(__dirname, '../db/db.json'), 'utf-8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        let lastID = notes.length.valueOf();
        let newNoteID = lastID + 1 ;
        const newNote = {
            title,
            text,
            id: newNoteID 
        };
        notes.push(newNote);
        console.log(notes);
        fs.writeFile(join(__dirname, '../db/db.json'),
            JSON.stringify(notes),
            (err) => {
                if (err) throw err;
                console.info(`Data written to Notes Database`);
                res.sendStatus(200);
            }
        )
    })
}
)

module.exports = apiRouter
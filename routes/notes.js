const apiRouter = require('express').Router();
const fs = require('fs');
const { join } = require('path');
const noteDB = require('../db/db.json');

//get /api/notes requests return save notes data from database
apiRouter.get('/notes', (req, res) => {
    fs.readFile(join(__dirname, '../db/db.json'), 'utf-8', (err, data) => {
        if (err) throw err;
        res.json(JSON.parse(data));
    })
})

//post api/notes requests add new note to database
apiRouter.post('/notes', (req, res) => {
    console.info(`${req.method} request recieved to add note`);
    const { title, text } = req.body;
    //returns error if either title or text fields are blank
    if (!title || !text) { throw new Error("Both note title and text fields must have content"); }
    fs.readFile(join(__dirname, '../db/db.json'), 'utf-8', (err, data) => {
        if (err) throw err;
        const notes = JSON.parse(data);
        //gives new note unique id number based on database length
        let lastID = notes.length.valueOf();
        let newNoteID = lastID + 1 ;
        const newNote = {
            title,
            text,
            id: newNoteID 
        };
        //adds new note to parsed database
        notes.push(newNote);
        console.log(notes);
        //returns notes data now including new note back to db.json returns ok status
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
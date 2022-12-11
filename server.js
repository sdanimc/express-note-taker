const express = require('express');
const path = require('path');
const fs = require('fs');
//const api = require('./routes/notes');
//const htmlGet = require('./routes/html');

//process.env.port allows environment to designate port if necessary and since we're using heroku this is important?
const PORT = process.env.PORT || 3001;
const app = express();

//doesn't load in browser 'unable to connect' worry about later?
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use('/api', api);
//app.use('/', htmlGet);

app.listen(PORT, () => 
console.log(`Server is listening at ${PORT}`)
)

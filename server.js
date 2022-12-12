const express = require('express');
const api = require('./routes/notes');
const htmlGet = require('./routes/html');

//process.env.port allows environment to designate port if necessary and since we're using heroku this is important?
const PORT = process.env.PORT || 3000;
const app = express();

//finds static page info in public folder
app.use(express.static('public'));

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//sends /api requests to notes router file and general / requests to html router file both in routes folder
app.use('/api', api);
app.use('/', htmlGet);

//listens at defined port Console log which port in case environment uses different from default 3000
app.listen(PORT, () => 
console.log(`Server is listening at ${PORT}`)
)
//have to disable firewall to connect to server
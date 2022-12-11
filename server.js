const express = require('express');
const api = require('./routes/notes');
const htmlGet = require('./routes/html');

//process.env.port allows environment to designate port if necessary and since we're using heroku this is important?
const PORT = process.env.PORT || 3000;
const app = express();

//have to disable firewall to view on browser
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);
app.use('/', htmlGet);

app.listen(PORT, () => 
console.log(`Server is listening at ${PORT}`)
)

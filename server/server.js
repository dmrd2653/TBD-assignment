const express = require('express');
const users = require('./data/users.js');

const PORT = 8000;

const app = express();

app.use(express.static('server/public'));

app.use(express.json());

app.get('/users', (req, res) => {
   res.status(200).send(users); 
});

app.listen(PORT, () => {
    console.log('App is listening on port', PORT);
});

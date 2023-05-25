const express = require('express');
const users = require('./data/users.js');
const pg = require('pg');
const DB_PASSWORD = process.env.DB_PASSWORD;
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.static('server/public'));

app.use(express.json());

const pool = new pg.Pool({
    host: 'db.bit.io',
    port: 5432,
    ssl: true,
    database: 'steveshumaker/trial',
    user: 'songs',
    password: DB_PASSWORD,
})

app.get('/users', (req, res) => {
   res.status(200).send(users); 
});

app.get('/messages', (req, res) => {
    let queryText = 'SELECT * FROM messages;';
    pool.query(queryText)
        .then((result) => {
            res.status(200).send(result.rows);
        }).catch((error) => {
            console.error(error);
            res.sendStatus(500);
        });
});

app.listen(PORT, () => {
    console.log('App is listening on port', PORT);
});

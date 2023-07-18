import express from 'express';
import pg from 'pg';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

const { Client } = pg;
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'moon_writers',
    user: 'postgres',
    password: '9qALU7jVCEZT4t',
});
client.connect()
    .then(() => console.log('Connected to PostgreSQL'))
    .catch(err => console.error('Error connecting to PostgreSQL', err));

app.get('/', (req, res) => {
    res.send('Hello, World!'); // Example response
});

app.post('/submit', (req, res) => {
    const { poemInput } = req.body; // Assuming the textarea's name attribute is "poemInput"
const query = `INSERT INTO your_table (poem_text) VALUES ($1) RETURNING *`;

    client.query(query, [poemInput], (err, result) => {
        if (err) {
            console.error('Error executing query', err);
            res.status(500).send('Error submitting poem');
        } else {
            const newRow = result.rows[0];
            res.redirect(`/upvote?id=${newRow.id}`);
        }
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const config = {
    host: process.env.MYSQL_HOST || 'mysql',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'appdb',
};

const connection = mysql.createConnection(config);

app.get('/', (req, res) => {
    const name = `User ${Math.floor(Math.random() * 100)}`;

    connection.query(`INSERT INTO people (name) VALUES ('${name}')`, (err) => {
        if (err) throw err;

        connection.query('SELECT name FROM people', (err, results) => {
            if (err) throw err;

            const namesList = results.map(row => `<li>${row.name}</li>`).join('');
            res.send(`
                <h1>Full Cycle Rocks!</h1>
                <ul>${namesList}</ul>
            `);
        });
    });
});

app.get('/health', (req, res) => {
    connection.query('SELECT 1', (err) => {
        if (err) {
            return res.status(500).send('Database is not healthy');
        }
        res.status(200).send('OK');
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

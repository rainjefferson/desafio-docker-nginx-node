const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

// Configuração do banco de dados
const config = {
    host: process.env.MYSQL_HOST || 'mysql',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || 'root',
    database: process.env.MYSQL_DATABASE || 'appdb',
};

const connection = mysql.createConnection(config);

// Endpoint principal
app.get('/', (req, res) => {
    const name = `User ${Math.floor(Math.random() * 100)}`;

    // Inserir um nome na tabela
    connection.query(`INSERT INTO people (name) VALUES ('${name}')`, (err) => {
        if (err) throw err;

        // Buscar todos os nomes
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

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

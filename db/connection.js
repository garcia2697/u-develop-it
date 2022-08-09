const mysql = require('mysql2');

const db = mysql.createConnection({
    host:'localhost',
    // your mysql username
    user: 'root',
    // Your MySQL password
    password: 'Good_bye2697',
    database:'election'
});

module.exports = db;
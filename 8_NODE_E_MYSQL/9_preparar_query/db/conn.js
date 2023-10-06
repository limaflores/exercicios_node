const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'meta',
    database: 'nodemysql1',
    password: 'root',
    port: 3307,
})

module.exports = pool

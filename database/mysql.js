var mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit: 100,
    host: '192.168.99.100',
    port: '3306',
    user: 'root',
    password: 'admin123',
    database: 'yauwa',
    debug: false,
    multipleStatements: true
});

module.exports.connection = connection;
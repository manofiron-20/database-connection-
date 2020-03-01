/*
author: manofiron
in this i will show you how to connect to database using node js
run 'npm i mysql' or 'npm i mysql --global' for downloading globally
*/
const mysql = require('mysql');

// uri for connection
const connection = mysql.createConnection({
    host: 'hostname',
    user: 'username of database management system',
    password: 'password of database management system',
    database: 'name of database'
});

// connecting to database
connection.connect();

// running query on database
connection.query('query', (err, row) => {
    // err = error if occurred
    // row = data
    if (err) {
        console.log('error: ' + err);
    } else {
        // if there is no error then what to do
    }

});
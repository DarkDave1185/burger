const mysql = require('mysql');

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'done',
        database: 'burgers_db'
    })
};
//connect to db
connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
});
//export orm
module.exports = connection;
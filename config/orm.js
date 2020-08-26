const connection = require("./connection.js");

let orm = {
    //selecst all
    selectAll: function(cb) {
        connection.query('SELECT * FROM burgers', (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    //insert one
    insertOne: function(burgerName, cb) {
        connection.query('INSERT INTO burgers SET ?', { burgerName: burgerName, devoured: false }, (err, result) => {
            if (err) throw err;
            cb(result);
        });
    },
    //update one
    updateOne: function(burger_id, cb) {
        connection.query('UPDATE burgers SET ? WHERE ?', [{ devoured: true }, { id: burger_id }], (err, result) => {
            if (err) throw err;
            cb(result);
        });
    }
};

module.exports = orm;
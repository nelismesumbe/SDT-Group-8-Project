const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'Localhost',
    user: 'root',
    password: '',
    database: 'gadget_hub'
});

db.connect(err => {
    if (err)console.log(err);
    else console.log('MySQL Connected');
});

module.exports = db;
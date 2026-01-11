const db = require('../config/db');

exports.getAllProducts = (req, res) => {
    db.query = 'SELECT * FROM products', (err, results) => {
        res.json(results);
    };
    };
    expoorts.getSingleProduct = (req, res) => {
        db.query('SELECT * FROM products WHERE id = ?',
            [req.params.id],
            (err, results) => {
                res.json(result[0]);
            }
        );
    };
const db = require('../config/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.register = (req, res) => {
    const { username, email, password } = req.body;

    const hashedPassword = bcrypt.hashSync(password, 10);

    const sql = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
    db.query(sql, [username, email, hashedPassword], (err) => {
        if (err) return res.status(500).json(err);
        res.json({message: 'User registered successfully' });
    }};
}; 
 exports.login = (req) => {
    const { email, password } = req.body;

    db.query(
        'SELECT * FROM users WHERE email = ?',
        [email],
        (err, result) => {
            if (result.lenght === 0)
                return res.status(401).json({ message:
            'User not found' });
        
        const user = result[0];
    bcrypt.compareSync(password, user.password);
         if (!valid)
            return res.status(401).json({message:
        'Invalid password'});
        const token = jwt.sign({ id: user.id},'secretetkey',{
            expiresIn: '1h'
        });
        res.json({ token });
        }
    );
 };
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = 8901;

app.use(cors(
 ));
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'sprin_project',
});

const JWT_SECRET = 'your_jwt_secret';

app.post('/auth/signin', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], (error, results) => {
    if (error) {
      return res.status(500).json({ success: false, message: 'Có lỗi xảy ra.' });
    }

    if (results.length > 0) {
      const user = results[0];
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) {
          return res.status(500).json({ success: false, message: 'Có lỗi xảy ra.' });
        }
        if (isMatch) {
          const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '24h' });
          return res.status(200).json({ success: true, message: 'Đăng nhập thành công.', token });
        } else {
          return res.status(401).json({ success: false, message: 'Email hoặc mật khẩu không đúng.' });
        }
      });
    } else {
      return res.status(401).json({ success: false, message: 'Email hoặc mật khẩu không đúng.' });
    }
  });
});

app.listen(8901, () => {
  console.log('Server is running on port 8901');
});

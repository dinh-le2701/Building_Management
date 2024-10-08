const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 1999;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database',
});

app.post('/auth/signin', (req, res) => {
  const { email, password } = req.body;

  db.query('SELECT * FROM users WHERE email = ? AND password = ?', [email, password], (error, results) => {
    if (error) {
      return res.status(500).json({ success: false, message: 'Có lỗi xảy ra.' });
    }
    if (results.length > 0) {
      return res.status(200).json({ success: true, message: 'Đăng nhập thành công.' });
    } else {
      return res.status(401).json({ success: false, message: 'Email hoặc mật khẩu không đúng.' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

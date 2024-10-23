const db = require('../db/database');

exports.createCategory = (req, res) => {
  const { name, type } = req.body;

  const sql = `INSERT INTO categories (name, type) VALUES (?, ?)`;
  db.run(sql, [name, type], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
};

exports.getAllCategories = (req, res) => {
  const sql = 'SELECT * FROM categories';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
};

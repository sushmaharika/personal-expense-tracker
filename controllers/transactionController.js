const db = require('../db/database');

// Create a new transaction
exports.createTransaction = (req, res) => {
  const { type, category, amount, date, description } = req.body;
  const sql = `INSERT INTO transactions (type, category, amount, date, description)
               VALUES (?, ?, ?, ?, ?)`;
  db.run(sql, [type, category, amount, date, description], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: this.lastID });
  });
};

// Get all transactions
exports.getAllTransactions = (req, res) => {
  const sql = 'SELECT * FROM transactions';
  db.all(sql, [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(rows);
  });
};

// Get transaction by ID
exports.getTransactionById = (req, res) => {
  const { id } = req.params;
  const sql = 'SELECT * FROM transactions WHERE id = ?';
  db.get(sql, [id], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (!row) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.status(200).json(row);
  });
};

// Update transaction by ID
exports.updateTransactionById = (req, res) => {
  const { id } = req.params;
  const { type, category, amount, date, description } = req.body;

  const sql = `UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ?
               WHERE id = ?`;
  db.run(sql, [type, category, amount, date, description, id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.status(200).json({ message: 'Transaction updated successfully' });
  });
};

// Delete transaction by ID
exports.deleteTransactionById = (req, res) => {
  const { id } = req.params;
  const sql = 'DELETE FROM transactions WHERE id = ?';
  db.run(sql, [id], function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (this.changes === 0) {
      return res.status(404).json({ error: 'Transaction not found' });
    }
    res.status(200).json({ message: 'Transaction deleted successfully' });
  });
};

// Get summary of transactions
exports.getTransactionSummary = (req, res) => {
  const sql = `
    SELECT 
      SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) AS total_income,
      SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS total_expense,
      SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) - 
      SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS balance
    FROM transactions
  `;
  
  db.get(sql, [], (err, row) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(row);
  });
};

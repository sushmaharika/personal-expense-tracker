const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db/database');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Define routes
app.use('/api/transactions', require('./routes/transactions'));
app.use('/api/categories', require('./routes/categories'));

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

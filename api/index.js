const express = require('express');
const path = require('path');

const app = express();

// Pug setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Route
app.get('/', (req, res) => {
  res.status(200).render('home');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

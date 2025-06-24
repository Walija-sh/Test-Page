const express = require('express');
const serverless = require('serverless-http');
const path = require('path');

const app = express();

// Set up Pug
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '../views'));

// Route
app.get('/', (req, res) => {
  res.status(200).render('home');
});

// Export for Vercel
module.exports = serverless(app);

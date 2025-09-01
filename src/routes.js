const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('<h2>Bienvenue dans le TP2 SCM avec Node.js et Jenkins 🚀</h2><a href="/hello">Aller sur la route Hello</a>');
});

router.get('/hello', (req, res) => {
  res.send('<h1>Bonjour depuis la route /hello 🎉</h1>');
});

module.exports = router;

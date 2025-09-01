const express = require('express');
const app = express();
const routes = require('./src/routes');

const PORT = process.env.PORT || 3000;

// Routes
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Serveur Node.js en cours d'exécution sur http://localhost:${PORT}`);
});

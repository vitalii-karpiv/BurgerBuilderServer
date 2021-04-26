const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Burger Builder Server');
});

app.listen(3000);

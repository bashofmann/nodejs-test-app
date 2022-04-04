const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const shutdown = function(signal) {
  console.log(`${signal} signal received: closing HTTP server`);
  server.close(() => {
    console.log('HTTP server closed');
    process.exit();
  });
}

process.on('SIGINT', shutdown);

process.on('SIGTERM', shutdown);

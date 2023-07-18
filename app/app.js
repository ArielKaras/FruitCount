const http = require('http');
const MongoClient = require('mongodb').MongoClient;
require('dotenv').config();

MongoClient.connect(process.env.MONGODB_URI, function(err, client) {
  const db = client.db('myFirstDatabase');

  const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Connected to MongoDB\n');
  });

  server.listen(3000, '127.0.0.1', () => {
    console.log('Server running at http://127.0.0.1:3000/');
  });
});

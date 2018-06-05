// let express = require('express');
// let cors = require('cors');
import express from 'express';
import cors from 'cors';
import uuidv4 from 'uuid/v4';

let app = express();

const serverArr = [
  {
    string: 'yo',
    id: uuidv4(),
  }
];

app.use(cors());

app.get('/*', (request, response) => {
  response.send(serverArr);
});

let PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
  console.log(`Listening on PORT: ${PORT}`);
});

//Will be transpiled through "funpack" to ES5   (/functions/server.js)
// let express = require('express');
// let cors = require('cors');
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import uuidv4 from 'uuid/v4';

const app = express();

let serverArr = [
  {
    string: 'Hardcoded String',
    id: uuidv4(),
  }
];

app.use(cors());
app.use(bodyParser.json());


app.get('/*', (request, response) => {
  response.send(serverArr);
});

//
app.post('/messages', (request, response) => {
  console.log('POST REQUEST HIT: ', request.body);
  let createdMessage = request.body;
  createdMessage.id = uuidv4();
  serverArr.push(createdMessage);
  response.send(createdMessage);
});

app.put('/messages/:id', (request, response) => {
  console.log('UPDATE REQUEST HIT: ', request.params);
  serverArr = serverArr.map((element) => {
    if (element.id === request.params.id) {
      return Object.assign({}, element, {string: request.body.string});
    }
  });
  response.send({
    updateMessage: 'message updated',
    id: request.params.id,
  });
});

app.delete('/messages/:id', (request, response) => {
  console.log('DELETE REQUEST HIT: ', request.params);
  serverArr = serverArr.filter((element) => {
    return element.id !== request.params.id;
  });
  response.send({
    deleteMessage: 'message deleted',
    id: request.params.id,
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT , () => {
  console.log(`Listening on PORT: ${PORT}`);
});

//Will be transpiled through "funpack" to ES5   (/functions/server.js)
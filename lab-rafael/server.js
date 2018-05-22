'use strict';
require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const uuid = require('uuid/v1');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send([
    {
      title: 'groceries',
      number: 300,
      id: uuid(),
      timestamp: Date.now()
    }
  ])
})

const server = (module.exports = {});

server.isOn = false;

server.start = () => {
  return new Promise((resolve, reject) => {
    if (server.isOn)
      return reject(new Error('Server Error. Server already running'));

    server.http = app.listen(PORT, () => console.log(`Listening on ${PORT}`));
    server.isOn = true;
    return resolve(server);
  });
};

server.stop = () => {
  return new Promise((resolve, reject) => {
    if (!server.isOn)
      return reject(new Error('Server Error. Server already stopped.'));

    server.http.close(() => {
      server.isOn = false;
      return resolve();
    });
  });
};

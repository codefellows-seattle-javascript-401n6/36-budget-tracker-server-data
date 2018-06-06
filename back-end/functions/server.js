"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

var _assign = _interopRequireDefault(require("babel-runtime/core-js/object/assign"));

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _v = _interopRequireDefault(require("uuid/v4"));

// let express = require('express');
// let cors = require('cors');
const app = (0, _express.default)();
let serverArr = [{
  string: 'Hardcoded String',
  id: (0, _v.default)()
}];
app.use((0, _cors.default)());
app.use(_bodyParser.default.json());
app.get('/*', (request, response) => {
  response.send(serverArr);
}); //

app.post('/messages', (request, response) => {
  console.log('POST REQUEST HIT: ', request.body);
  let createdMessage = request.body;
  createdMessage.id = (0, _v.default)();
  serverArr.push(createdMessage);
  response.send(createdMessage);
});
app.put('/messages/:id', (request, response) => {
  console.log('UPDATE REQUEST HIT: ', request.params);
  serverArr = serverArr.map(element => {
    if (element.id === request.params.id) {
      return (0, _assign.default)({}, element, {
        string: request.body.string
      });
    }
  });
  response.send({
    updateMessage: 'message updated',
    id: request.params.id
  });
});
app.delete('/messages/:id', (request, response) => {
  console.log('DELETE REQUEST HIT: ', request.params);
  serverArr = serverArr.filter(element => {
    return element.id !== request.params.id;
  });
  response.send({
    deleteMessage: 'message deleted',
    id: request.params.id
  });
});
const PORT = undefined || 3000;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
}); //Will be transpiled through "funpack" to ES5   (/functions/server.js)
"use strict";

var _interopRequireDefault = require("babel-runtime/helpers/interopRequireDefault");

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _v = _interopRequireDefault(require("uuid/v4"));

// let express = require('express');
// let cors = require('cors');
let app = (0, _express.default)();
app.use((0, _cors.default)());
app.get('/*', (request, response) => {
  response.send([{
    string: 'yo',
    id: (0, _v.default)()
  }]);
});
let PORT = undefined || 3000;
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
}); //Will be transpiled through "funpack" to ES5   (/functions/server.js)
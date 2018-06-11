'use strict';

require('dotenv').config();

const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI);

const express = require('express');
const cors = require('cors');
const uuidv1 = require('uuid/v1');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const CategorySchema = new mongoose.Schema({
  catId: String,
  name: String,
  budget: Number
});

const Category = mongoose.model('Category', CategorySchema);

Category.remove({})
  .then(() => {
    return Category.create({
      catId: uuidv1(),
      name: 'Food',
      budget: 500
    });
  }).then(() => {
    return Category.find({});
  });

app.get('/api/categories', function(req, res) {
  Category.find({})
    .then(categories => {
      res.send(categories);
    });
});

app.post('/api/categories', function(req, res) {
  let body = req.body;
  body.catId = uuidv1();
  Category.create(body)
    .then(() => {
      return Category.find({name: req.body.name});
    })
    .then(category => {
      res.send(category);
    });
});

app.put('/api/categories', function(req, res) {
  let body = req.body;
  Category.update({name: body.name}, {body})
    .then(() => {
      return Category.find({name: body.name});
    })
    .then(category => {
      res.send(category);
    });
});

app.delete('/api/categories', function(req, res) {
  Category.deleteOne({name: req.query.name})
    .then(() => {
      res.status(204);
      res.send();
    });
});



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening in at http://localhost:${PORT}`);
});
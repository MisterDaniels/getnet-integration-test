const path = require('path');
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');

var routes = require('./routes');

var app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './views'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use(express.json());
app.use(errors());

app.use(routes);

module.exports = app;
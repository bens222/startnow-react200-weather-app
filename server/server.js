require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const axios = require('axios');

const app = express();

app.use(morgan('dev'));
app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/weather/:inputValue', (req, res) => {
  axios({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${req.params.inputValue}&APPID=${process.env.WEATHER_API_KEY}&units=imperial`,
    method: 'get'
  })
  .then((response) => {
    res.send(response.data);
  });
});

module.exports = app;

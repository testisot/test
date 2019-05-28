const express = require('express');
const router = express.Router();
const db = require('../models');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  db.sequelize.query('SELECT * FROM public."Articles"', {
    model: db.Article,
    mapToModel: true // pass true here if you have any mapped fields
  })
  .then((articles) => { 
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });
  });
});

router.get('/cars', (req, res, next) => {
  db.sequelize.query('SELECT * FROM public.cars', {
    model: db.Car,
    mapToModel: true // pass true here if you have any mapped fields
  })
  .then((cars) => { 
    res.render('cars', {
      title: 'Generator-Express MVC',
      cars: cars
    });
  });
});
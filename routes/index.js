var express = require('express');
var router = express.Router();
var filmsModel = require('../models/filmsModel')

/* GET home page. */
router.get('/inicio', (req, res, next) =>{
  res.render('vista.hbs',
  {
    title:'Primera Vista',
    page: 'Página variable'
  });
});

router.get('/listado', (req, res, next) =>{
  filmsModel.fetchAll((error, films)=>{
    if (error) return res.status(500).json(error);
    res.render('film-list', {
      title: 'Listado de peliculas',
      layout: 'layout.hbs',
      films
    })
  })
})

router.get('/insertar', (req, res, next)=>{
  const FILM ={
    "title": "Es una prueba2",
    "language_id": 1,
  };

  filmModel.insert(FIML, (error, insertId)=>{
    if (insertId){
      return res.status(200).send('Añadido pelicula -> ' + insertId);
    }
    res.status(500).json('Error guardando película' + error);
  });
});

router.get('/prueba', (req, res, next)=>{
  res.render('prueba.hbs', {
    usuarios: [
      {id: 1 , name: 'xavi'},
      {id: 2 , name: 'pepe'},
      {id: 3 , name: 'jesus'}
    ],
    administrador: {
      nombre: 'Xavi',
      apellidos : 'Rodriguez'
      },
    appName: 'Prueba',
    layout: 'layout'
    })
});

module.exports = router;
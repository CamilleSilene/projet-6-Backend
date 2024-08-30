const Book = require('../models/Books');

//renvoie un tableau de tous les éléments du modèle Books
exports.getAllBook = (req, res, next) => {
    Book.find()
      .then((books) => res.status(200).json(books))
      .catch((error) => res.status(400).json({ error }));
  };
  
  //renvoie un élément avec l'id fourni
  exports.getOneBook = (req, res, next) => {
    Book.findOne({ _id: req.params.id })
      .then((book) => res.status(200).json(book))
      .catch((error) => res.status(400).json({ error }));
  };
  
  //suppression de _id dans le req.body car l'id des éléments sera généré par MongoDB
  //création d'une const thing qui reprend le modèle Thing en lui passant les infos requises dans le body
  //utilisation de SPREAD "..." pour faire une copie de tous les éléments de req.body
  //la méthode .save renvoie une promise
  exports.createBook = (req, res, next) => {
      delete req.body._id;
      const book = new Book({
        ...req.body
      });
      book.save()
    .then(() => res.status(201).json({message: 'Livre enregistré'}))
    .catch(error => res.status(400).json({error}));
    };
  
  //route de suppression avec l'id dans le path
  //méthode .deleteOne qui prend l'id en paramètres
  exports.deleteBook = (req, res, next) => {
    Book.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: "Livre supprimé" }))
      .catch((error) => res.status(400).json({ error }));
  };
  
  //méthode updateOne pour mettre à jour/modifier
  //1er argument c'est l'objet que l'on modifie : id dans les paramètres de requête
  //2eme argument c'est la nouvelle version de l'objet en faisant correspondre les id
  exports.modifyBook = (req, res, next) => {
    Book.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
      .then(() => res.status(200).json({ message: "Livre modifié" }))
      .catch((error) => res.status(400).json({ error }));
  };
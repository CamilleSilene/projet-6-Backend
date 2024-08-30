//fonction d'importation d'express
const express = require("express");

//constante app qui va appeler la méthode express
const app = express();

app.use(express.json());

const mongoose = require("mongoose");

const User = require("./models/Users");
const Book = require("./models/Books");

mongoose
  .connect(
    "mongodb+srv://pierrotcamille04:qhqKTmyT9KsEbumx@cluster0.b8lhp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée :/ !"));

//middleware général : appliqué à toutes les routes du serveur
//fonction pour ajouter des en-têtes aux réponses qu'on renvoie au navigateur pour autoriser l'accès à l'API
//pour permettre la possibilité d'envoyer des requêtes avec les méthodes mentionnées
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});



app.use('/api/books', stuffRoutes);

//exporter l'app pour pouvoir utiliser sur les autres fichiers
module.exports = app;
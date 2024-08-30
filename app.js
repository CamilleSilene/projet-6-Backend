
const dotenv = require("dotenv");
dotenv.config();

//fonction d'importation d'express
const express = require("express");
//constante app qui va appeler la méthode express
const app = express();
app.use(express.json());

const mongoose = require("mongoose");
const booksRoutes = require("./routes/books");
const User = require("./models/Users");
const Book = require("./models/Books");

const mongoConnectionConfig = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_URL}/${process.env.MONGO_DB}?${process.env.MONGO_OPTIONS}`;

mongoose
  .connect(
    mongoConnectionConfig,
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



app.use('/api/books', booksRoutes);

//exporter l'app pour pouvoir utiliser sur les autres fichiers
module.exports = app;
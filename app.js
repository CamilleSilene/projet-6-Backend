
const dotenv = require("dotenv");
dotenv.config();

//fonction d'importation d'express
const express = require("express");
const cors = require('cors');

const mongoose = require("mongoose");

//constante app qui va appeler la méthode express
const app = express();
app.use(express.json());
app.use('/images', express.static('images'));//livre les images


const booksRoutes = require("./routes/books");
const usersRoutes = require("./routes/users");
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


app.use(cors())

app.use('/api/books', booksRoutes);
app.use('/api/auth', usersRoutes);

//exporter l'app pour pouvoir utiliser sur les autres fichiers
module.exports = app;
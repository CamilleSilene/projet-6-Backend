const mongoose = require("mongoose");

//création d'un schéma de données avec les éléments reqis et leur type attendus
//utilisation de la méthode Schema généré par Mongoose
const bookSchema = mongoose.Schema({
  userId: { type: String, required: true },
  title: { type: String, required: true },
  author: { type: String, required: true },
  imageUrl: { type: String, required: true },
  year: { type: Number, required: true },
  genre: { type: String, required: true },
  rating: [
    {
      userId: { type: String, required: true },
      grade: { type: Number, required: true },
    },
  ],
  averageRating: { type: Number, required: true },
});

//export du schéma pour le rendre disponible pour Express
//la méthode .model le rend utilisable
module.exports = mongoose.model("Book", bookSchema);

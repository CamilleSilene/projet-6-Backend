const mongoose = require("mongoose");

//création d'un schéma de données avec les éléments reqis et leur type attendus
//utilisation de la méthode Schema généré par Mongoose
const userSchema = mongoose.Schema({
email: {type: String, required: true},
password: {type: String, required: true},
});

//export du schéma pour le rendre disponible pour Express
//la méthode .model le rend utilisable
module.exports = mongoose.model("User", userSchema);

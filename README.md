# Backend du Projet 7 - Grimoire

Mon vieux Grimoire est un site de référencement et de notation de livres.

## Technologies

Ce projet utilise les technologies suivantes :

- Node.js: Environnement d'exécution JavaScript côté serveur.
- Express: Framework pour faciliter la création d'API RESTful.
- MongoDB: Base de données NoSQL pour le stockage des données.
- Mongoose: Bibliothèque pour interagir avec MongoDB.
- bcrypt: Bibliothèque pour le hachage des mots de passe.
- dotenv: Gestion des variables d'environnement.
- jsonwebtoken: Gestion des JSON Web Tokens pour l'authentification.
- multer: Gestion du téléchargement de fichiers.
- sharp: Traitement des images.

## Installation avec git/github

Le projet est en deux parties, la partie back-end et la partie front-end :


1. Clonez le dépôt : git clone https://github.com/CamilleSilene/projet-6-frontend.git
2. Clonez le dépôt : git clone https://github.com/CamilleSilene/projet-6-Backend.git

3. Installez les dépendances : npm install

4. Créez un fichier .env puis rajoutez les données suivantes : 

Le lien pour se connecter à la base de données MongoDB :
```
MONGO_URL=<Mongo url>
MONGO_USER=<Mongo user name>
MONGO_PASSWORD=<Mongo password>
MONGO_DB=<Mongo DB name>
MONGO_OPTIONS=retryWrites=true&w=majority&appName=<Mongo DB app Name>
```

Le token :
JWT_TOKEN=<JWT Encryption Salt >

## Utilisation

Démarrez le serveur : npm start

La partie frontend sera disponible à l'adresse http://localhost:3000.
La partie backend sera disponible à l'adresse http://localhost:4000.
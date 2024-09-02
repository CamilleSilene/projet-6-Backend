const express = require('express');
const auth = require('auth');
const router = express.Router();

const booksCtrl = require('../controllers/Ctrl-Books');

router.get('/api/books', booksCtrl.getAllBook);
router.post('/api/books', auth, booksCtrl.createBook);
router.get('/api/books/:id', auth, booksCtrl.getOneBook);
router.put('/api/books/:id', auth, booksCtrl.modifyBook);
router.delete('/api/books/:id', auth, booksCtrl.deleteBook);

module.exports = router;
const express = require('express');
const router = express.Router();

const booksCtrl = require('../controllers/Ctrl-Books');

router.get('/', booksCtrl.getAllBook);
router.post('/', booksCtrl.createBook);
router.get('/:id', booksCtrl.getOneBook);
router.put('/:id', booksCtrl.modifyBook);
router.delete('/:id', booksCtrl.deleteBook);

module.exports = router;
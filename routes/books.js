const express = require("express");
const auth = require("../middleware/auth");
const router = express.Router();

const booksCtrl = require("../controllers/Ctrl-Books");
const multer = require("../middleware/multer-config");
const optimizeImage = require("../middleware/sharp-config");

router.get("/", booksCtrl.getAllBook);
router.post("/", auth, multer, optimizeImage, booksCtrl.createBook);
router.get("/bestrating", booksCtrl.bestRating);
router.post("/:id/rating", auth, booksCtrl.ratingBook);
router.get("/:id", booksCtrl.getOneBook);
router.put("/:id", auth, multer, optimizeImage, booksCtrl.modifyBook);
router.delete("/:id", auth, booksCtrl.deleteBook);

module.exports = router;

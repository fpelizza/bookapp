const express = require('express');
const { userRegistration, currentUser, userLogin, addBook, getFavouritesBooks } = require('../controllers/userController');
const { validateToken } = require('../middleware/validateToken');
const router = express.Router();

router.post('/register', userRegistration)
router.post('/login', userLogin)
router.post('/addFavouriteBook',validateToken, addBook)
router.get('/current', validateToken ,currentUser)
router.post('/favouritesBooks', validateToken , getFavouritesBooks)


module.exports = router
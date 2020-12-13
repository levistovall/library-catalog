var express = require('express');
var router = express.Router();

// Require controller modules.
var book_controller = require('../controllers/bookController');
var author_controller = require('../controllers/authorController');
var genre_controller = require('../controllers/genreController');
var book_instance_controller = require('../controllers/bookinstanceController');
var user_controller = require('../controllers/userController');

/// BOOK ROUTES ///

// GET catalog home page.
router.get('/', book_controller.index);

// POST request for creating Book.
router.post('/book/create', user_controller.allowIfLoggedin, book_controller.book_create_post);

// POST request to delete Book.
router.post('/book/:id/delete', user_controller.allowIfLoggedin, book_controller.book_delete_post);

// POST request to update Book.
router.post('/book/:id/update', user_controller.allowIfLoggedin, book_controller.book_update_post);

// GET request for one Book.
router.get('/book/:id', user_controller.allowIfLoggedin, book_controller.book_detail);

// GET request for list of all Book items.
router.get('/books', user_controller.allowIfLoggedin, book_controller.book_list);

/// AUTHOR ROUTES ///

// POST request for creating Author.
router.post('/author/create', user_controller.allowIfLoggedin, author_controller.author_create_post);

// POST request to delete Author.
router.post('/author/:id/delete', user_controller.allowIfLoggedin, author_controller.author_delete_post);

// POST request to update Author.
router.post('/author/:id/update', user_controller.allowIfLoggedin, author_controller.author_update_post);

// GET request for one Author.
router.get('/author/:id', user_controller.allowIfLoggedin, author_controller.author_detail);

// GET request for list of all Authors.
router.get('/authors', user_controller.allowIfLoggedin, author_controller.author_list);

/// GENRE ROUTES ///

//POST request for creating Genre.
router.post('/genre/create', user_controller.allowIfLoggedin, genre_controller.genre_create_post);

// POST request to delete Genre.
router.post('/genre/:id/delete', user_controller.allowIfLoggedin, genre_controller.genre_delete_post);

// POST request to update Genre.
router.post('/genre/:id/update', user_controller.allowIfLoggedin, genre_controller.genre_update_post);

// GET request for one Genre.
router.get('/genre/:id', user_controller.allowIfLoggedin, genre_controller.genre_detail);

// GET request for list of all Genre.
router.get('/genres', user_controller.allowIfLoggedin, genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// POST request for creating BookInstance. 
router.post('/bookinstance/create', user_controller.allowIfLoggedin, book_instance_controller.bookinstance_create_post);

// POST request to delete BookInstance.
router.post('/bookinstance/:id/delete', user_controller.allowIfLoggedin, book_instance_controller.bookinstance_delete_post);

// POST request to update BookInstance.
router.post('/bookinstance/:id/update', user_controller.allowIfLoggedin, book_instance_controller.bookinstance_update_post);

// GET request for one BookInstance.
router.get('/bookinstance/:id', user_controller.allowIfLoggedin, book_instance_controller.bookinstance_detail);

// GET request for list of all BookInstance.
router.get('/bookinstances', user_controller.allowIfLoggedin, book_instance_controller.bookinstance_list);

module.exports = router;

const express = require('express');
const userRoots = require('./user');
const authorRoots = require('./author');
const bookRoots = require('./book');
const categoryRoots = require('./category');

const router = express.Router();

router.use('/user', userRoots);
router.use('/author', authorRoots);
router.use('/book', bookRoots);
router.use('/category', categoryRoots);

module.exports = router;

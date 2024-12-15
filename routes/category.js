const express = require('express');
const validator = require('express-joi-validation').createValidator({});

const router = express.Router();
const authentication = require('../middlewares/jwtToken');
const permission = require('../middlewares/role');
const categoryController = require('../controllers/categoryController');

const { addCategory, updateCategory, id } = require('../validation/category');

router.post(
    '/add',
    authentication,
    permission('basic', 'supervisor', 'admin'),
    validator.body(addCategory),
    categoryController.addCategory
);
router.put(
    '/update',
    authentication,
    permission('basic', 'supervisor', 'admin'),
    validator.body(updateCategory),
    categoryController.updateCategory
);
router.delete(
    '/delete',
    authentication,
    permission('basic', 'supervisor', 'admin'),
    validator.query(id),
    categoryController.deleteCategory
);
router.get(
    '/get',
    authentication,
    permission('basic', 'supervisor', 'admin'),
    categoryController.getCategory
);
router.get(
    '/getById',
    authentication,
    permission('basic', 'supervisor', 'admin'),
    validator.query(id),
    categoryController.getCategoryById
);

module.exports = router;
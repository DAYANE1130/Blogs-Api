const { Router } = require('express');
const postCategoryController = require('../controller/postCategoryController');
const validateToken = require('../middleware/validateToken');

const router = Router();

router.get('/', validateToken.verifyToken, postCategoryController.getAllPost);

module.exports = router;

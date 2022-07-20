const { Router } = require('express');
const postCategoryController = require('../controller/postCategoryController');
const validateToken = require('../middleware/validateToken');

const router = Router();

router.get('/', validateToken.verifyToken, postCategoryController.getAllPost);
router.get('/:id', validateToken.verifyToken, postCategoryController.getPostById);
router.post('/', validateToken.verifyToken, postCategoryController.create);

module.exports = router;

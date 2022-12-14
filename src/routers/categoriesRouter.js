const { Router } = require('express');
const categoriesController = require('../controller/categoriesController');
// const validateUser = require('../middleware/validateUser');
const validateToken = require('../middleware/validateToken');

const router = Router();

router.post('/', validateToken.verifyToken, categoriesController.create);
router.get('/', validateToken.verifyToken, categoriesController.getAll);

module.exports = router;

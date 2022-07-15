const { Router } = require('express');
const userController = require('../controller/userController');

const router = Router();

// router.get('/', bookController.getAll);
// router.get('/:id', bookController.getById);
router.post('/', userController.create);

module.exports = router;
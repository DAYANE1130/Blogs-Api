const { Router } = require('express');
const userController = require('../controller/userController');
const validateEmailPassword = require('../middleware/ validateEmailPassword');

const router = Router();

// router.get('/', bookController.getAll);
// router.get('/:id', bookController.getById);
router.post('/', validateEmailPassword.validateEmail,
validateEmailPassword.validatePassword, userController.create);

module.exports = router;
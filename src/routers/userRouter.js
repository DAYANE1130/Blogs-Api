const { Router } = require('express');
const userController = require('../controller/userController');
const validateUser = require('../middleware/validateUser');
// const authToken = require('../middleware/authToken');

const router = Router();

// router.get('/', bookController.getAll);
// router.get('/:id', bookController.getById);
router.post('/',
// authToken,
validateUser.validatDisplayName,
validateUser.validateEmail,
validateUser.validatePassword,
 userController.create);

module.exports = router;
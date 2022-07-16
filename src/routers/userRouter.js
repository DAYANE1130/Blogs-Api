const { Router } = require('express');
const userController = require('../controller/userController');
const validateUser = require('../middleware/validateUser');
const validateToken = require('../middleware/validateToken');

const router = Router();

// router.get('/', bookController.getAll);
// router.get('/:id', bookController.getById);
router.post(
  '/',
  validateUser.validatDisplayName,
  validateUser.validateEmail,
  validateUser.validatePassword,
  userController.create,
);

router.get('/', validateToken.verifyToken, userController.getAll);
router.get('/:id', validateToken.verifyToken, userController.getById);

module.exports = router;

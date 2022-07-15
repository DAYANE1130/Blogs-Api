const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;
// const { Book } = require('../models/book'); se importar com  / book no final não reconhece a pasta e não retorna nada
const userService = {
create: async ({ displayName, email, password, image }) => {
  console.log('param service', { displayName, email, password, image });
const findUser = await User.findOne({ where: { email } });
console.log('compare', findUser);
if (findUser) return false; 

const user = await User.create({ displayName, email, password, image });
console.log(user);
const token = jwt.sign({ email }, secret,
  { expiresIn: '30d',
   algorithm: 'HS256' });
   console.log('token', token);
return { token };
  },
};

module.exports = userService;
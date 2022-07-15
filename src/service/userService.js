const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;
// const { Book } = require('../models/book'); se importar com  / book no final não reconhece a pasta e não retorna nada
const userService = {
  // getAll: async () => {
  //   const book = await Book.findAll({
  //     attributes: { exclude: [ 'createdAt', 'updatedAt'] },
  //   });
  //   return book;
  // },
  // getById: async(id) => {
  //   const idBook = await Book.findByPk(id,{
  //     attributes: { exclude: [ 'createdAt', 'updatedAt'] },
  //   });
  //   return idBook;
  // },
  create: async ({ email, password }) => {
const findUser = await User.findOne({ where: { email } });
if (!findUser || findUser.password !== password) return false; 
await User.create({ email, password });
const token = jwt.sign({ email }, secret,
     { expiresIn: '30d',
      algorithm: 'HS256' });
return { token };
  },
};

module.exports = userService;
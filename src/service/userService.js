const { User } = require('../database/models');
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
    // antes de criar ele tem que verificar se esse email existe
    
    const user = await User.create({ email, password });
    return user;
  },
};

module.exports = userService;
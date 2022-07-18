const jwt = require('jsonwebtoken');
const { User } = require('../database/models');
require('dotenv').config();

const secret = process.env.JWT_SECRET;
const userService = {
  create: async ({ displayName, email, password, image }) => {
    // console.log('cguei ate aqui', displayName, email);
    const findUser = await User.findOne({ where: { email } });
    if (findUser) return false;
    const user = await User.create({ displayName, email, password, image });
    const { id } = user;
    console.log(id);
    const token = jwt.sign({ id, email }, secret, {
      expiresIn: '30d',
      algorithm: 'HS256',
    });
    return { token };
  },
  getAll: async () => {
    const users = await User.findAll({
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    });
    return users;
  },
  getById: async (id) => {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['password', 'createdAt', 'updatedAt'] },
    });
    if (!user) return false;
    return user;
  },
};

module.exports = userService;

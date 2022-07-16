const userService = require('../service/userService');

const userController = {
  create: async (req, res) => {
    const { displayName, email, password, image } = req.body;
    try {
      const user = await userService.create({ displayName, email, password, image });
      if (!user) {
        return res.status(409).json({ message: 'User already registered' });
      }
      console.log(user);
      return res.status(201).json(user);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Error' });
    }
  },
  getAll: async (req, res) => {
    const book = await userService.getAll();
    res.status(200).json(book);
  },
};
module.exports = userController;

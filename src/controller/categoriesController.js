const categoriesService = require('../service/categoriesService');

const categoriesController = {
  create: async (req, res) => {
    const { name } = req.body;
    try {
      const category = await categoriesService.create({ name });
      if (!name) return res.status(400).json({ message: '"name" is required' });
      return res.status(201).json(category);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Error' });
    }
  },
  getAll: async (req, res) => {
    try {
      const categories = await categoriesService.getAll();
      res.status(200).json(categories);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Error' });
    }
  },
};
module.exports = categoriesController;

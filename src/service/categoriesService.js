const { Category } = require('../database/models');

const categoriesService = {
  create: async ({ name }) => {
    const category = await Category.create({ name });
    return category;
  },
  getAll: async () => {
    const categories = await Category.findAll({
      attributes: { exclude: ['createdAt', 'updatedAt'] },
    });
    // console.log('categories de categ', categories.dataValues);
    return categories;
  },
};

module.exports = categoriesService;

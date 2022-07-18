const { Category } = require('../database/models');

const categoriesService = {
  create: async ({ name }) => {
    const category = await Category.create({ name });
    return category;
  },
};

module.exports = categoriesService;

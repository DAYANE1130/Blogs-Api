// const { Category } = require('../database/models');
const { User } = require('../database/models');

const { Category } = require('../database/models');

const { BlogPost } = require('../database/models');

const postCategoryService = {
  getAllPost: async () => {
    const post = await BlogPost.findAll({
      // aqui eu chamo alguma das duas models que fazem parte do relacionamento
    
      // through: { attributes: [] },
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        },
      ],
    });
    return post;
  },
  getPostById: async (id) => {
    const post = await BlogPost.findByPk(id, {
      // aqui eu chamo alguma das duas models que fazem parte do relacionamento
    
      // through: { attributes: [] },
      include: [
        {
          model: User,
          as: 'user',
          attributes: { exclude: ['password'] },
        },
        {
          model: Category,
          as: 'categories',
          through: { attributes: [] },
        },
      ],
    });
    return post;
  },
};

module.exports = postCategoryService;

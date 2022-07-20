// const { Category } = require('../database/models');
const { User } = require('../database/models');

const { Category } = require('../database/models');
const categoriesService = require('./categoriesService');

const { BlogPost } = require('../database/models');

const postCategoryService = {
  getAllPost: async () => {
    const posts = await BlogPost.findAll({
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
    return posts;
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
  create: async ({ id, title, content, categoryIds }) => {
    console.log('entro service', id);
    // console.log('entrei param', categoryIds.map((e) => e));
    const categories = await categoriesService.getAll(); // lista inteira de categorias
    // console.log(Category.dataValues);
    const verifyCategory = categoryIds.every((categoryId) =>
    categories.some((category) => category.id === categoryId));
    if (!verifyCategory) return false;
    const post = await BlogPost.create({ title, content, userId: id, categoryIds });
    console.log('post criado', post.dataValues);
    return post;
  },
};

module.exports = postCategoryService;

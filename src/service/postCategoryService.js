// const { Category } = require('../database/models');
const { User } = require('../database/models');

const { Category } = require('../database/models');
// const categoriesService = require('./categoriesService');

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
  create: async ({ title, content, categoryIds }) => {
    //   console.log('entro service', id);
    // OUTRA FORMA DE RESOLVER O FINDALL COM HOFS:
    //  // como consigo pegar a lista de categorias do BANCO ?  -- Category
    //  const categories = await categoriesService.getAll(); // É UM ARRAY

    // //  console.log("dataVakues",categ.dataValues); UNDEFINED;
    //  // onde tenho a lista de categoryIds ?  -- categoryIds
    //  const findCategory = categoryIds.every((categoryId) => categories
    //  .some((item) => item.id === categoryId));
    //  //  cada item [ Category ] ===  [categoryIds]
    //  if (!findCategory) return false;

    const find = await Category.findAll({
      where: { id: categoryIds },
    });
    if (find.length < 1) return false;

    const post = await BlogPost.create({ title, content, categoryIds });
    // console.log('post criado', post.dataValues);
    return post;
  },
};

module.exports = postCategoryService;

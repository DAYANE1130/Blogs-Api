const postCategoryService = require('../service/postCategoryService');

const postCategoryController = {

  getAllPost: async (req, res) => {
    // const {  } = req.params;
    try {
      const post = await postCategoryService.getAllPost();
      // if (!post) return res.status(404).json({ message: 'Post does not exist' });
      return res.status(200).json(post);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Error' });
    }
  },
  getPostById: async (req, res) => {
    const { id } = req.params;
    try {
      const post = await postCategoryService.getPostById(id);
      if (!post) return res.status(404).json({ message: 'Post does not exist' });
      return res.status(200).json(post);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Error' });
    }
  },
  // OS PARAMETROS ENTRAM UNDEFINED
  create: async (req, res) => {
    const { id } = req.payload;
    const { title, content, categoryIds } = req.body;
    // const [a] = categoryIds;
    console.log('payload control', id);
    console.log('params control', req.body);
    try {
      const post = await postCategoryService
      .create({ title, content, userId: req.payload.id, categoryIds });
      console.log('post control', post);
      if (!post) return res.status(400).json({ message: '"categoryIds" not found' }); 
      return res.status(201).json(post);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Error' });
    }
  },
};
module.exports = postCategoryController;
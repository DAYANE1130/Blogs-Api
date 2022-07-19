const postCategoryService = require('../service/postCategoryService');

const postCategoryController = {

  getAllPost: async (req, res) => {
    // const {  } = req.params;
    try {
      const post = await postCategoryService.getAllPost();
      if (!post) return res.status(404).json({ message: 'Post does not exist' });
      return res.status(200).json(post);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Error' });
    }
  },
};
module.exports = postCategoryController;
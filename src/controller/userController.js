const userService = require('../service/userService');

const userController = {
  // getAll: async (req,res) => {
  //   const book = await userService.getAll();
  //   res.status(200).json(book)
  // },
  // getById:async(req,res) => {
  //   const {id} = req.params;
  //   const idBook = await userService.getById(id);
  //   if(!idBook) return res.status(404).json({message:'Book not found'});
  //   return res.status(200).json(idBook);
  // },
  create: async (req, res) => {
  const { email, password } = req.body;
  const user = await userService.create({ email, password });
  if (!user) {
 return res.status(400).json({ message: 'Invalid fields' }); 
}
  return res.status(201).json(user);
  },
};
module.exports = userController;
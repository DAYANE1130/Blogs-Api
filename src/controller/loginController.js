const loginService = require('../service/loginService');
// const { User } = require('../database/models');

const loginController = {
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

//  if (!email || !password) {
//   return res.status(400).json({ message: 'Some required fields are missing' }); 
//  }
//  const findUser = await User.findOne({ where: { email } });

//  if (!findUser || findUser.password !== password) {
//    return res.status(400).json({ message: 'Invalid fields' }); 
//  }
 const createToken = await loginService.create({ email, password });
 if (createToken === false) return res.status(400).json({ message: 'Invalid fields' });  

return res.status(200).json(createToken);
  },
};
module.exports = loginController;
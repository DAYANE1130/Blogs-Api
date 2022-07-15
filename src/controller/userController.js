const userService = require('../service/userService');
const { User } = require('../database/models');

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

 if (!email || !password) {
  return res.status(400).json({ message: 'Some required fields are missing' }); 
 }
 const findUser = await User.findOne({ where: { email } });

 if (!findUser || findUser.password !== password) {
   return res.status(400).json({ message: 'Invalid fields' }); 
 }
  await userService.create({ email, password });

  return res.status(200).json({
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXlsb2FkIjp7ImlkIjo1LCJkaXNwbGF5TmFtZSI6InVzdWFyaW8gZGUgdGVzdGUiLCJlbWFpbCI6InRlc3RlQGVtYWlsLmNvbSIsImltYWdlIjoibnVsbCJ9LCJpYXQiOjE2MjAyNDQxODcsImV4cCI6MTYyMDY3NjE4N30.Roc4byj6mYakYqd9LTCozU1hd9k_Vw5IWKGL4hcCVG8',
  });
  },
};
module.exports = userController;
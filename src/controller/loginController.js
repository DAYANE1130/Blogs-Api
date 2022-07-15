const loginService = require('../service/loginService');
// const { User } = require('../database/models');

const loginController = {

  create: async (req, res) => {
  const { email, password } = req.body;
  try {
    const createToken = await loginService.create({ email, password });
    if (createToken === false) return res.status(400).json({ message: 'Invalid fields' });  
   
   return res.status(200).json(createToken);
     } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'Internal Error' });
     }
  },

};
module.exports = loginController;
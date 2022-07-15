const userService = require('../service/loginService');

const userController = {
create: async (req, res) => {
const { displayName, email, password, image } = req.body;
console.log('req.body', req.body);

// if(email === false) return res.status(409).json({ message: 'User already registered' }); 
 const user = await userService.create({ displayName, email, password, image });
 if (!user) {
 return res.status(409).json({ message: 'User already registered' }); 
}  
console.log(user);
return res.status(200).json(user);
  },
};
module.exports = userController;
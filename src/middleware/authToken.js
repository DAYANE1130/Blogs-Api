const jwt = require('jsonwebtoken');
const { User } = require('../database/models');

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  const secret = process.env.JWT_SECRET;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' }); 
   }
  try {
    const payload = jwt.verify(token, secret);
    console.log('TOKENNN', payload);
    const user = await User.findOne({ where: payload });
    if (!user) return res.status(401).json({ message: 'Expired or invalid token' }); 
  req.user = user;
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Error' });
  }
};
module.exports = verifyToken;
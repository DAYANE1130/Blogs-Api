const jwt = require('jsonwebtoken');
// const { User } = require('../database/models');

const verifyToken = async (req, res, next) => {
  const token = req.headers.authorization;
  // console.log('authorization', token);
  const secret = process.env.JWT_SECRET;
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  try {
    const payload = jwt.verify(token, secret);
    // console.log('ENTREIII TOKENNN', payload);
    // const user = await User.findOne({ where: { payload } });
    // console.log('payload', user);
    req.payload = payload;
    console.log('reqqq.payload', req.payload = payload);

    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};
module.exports = { verifyToken };

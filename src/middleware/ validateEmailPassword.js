const errors = {
  emailIsBlank: 'Some required fields are missing',
  passwordIsBlank: 'Some required fields are missing',
};

const validateEmailPassword = {
  validateEmail: async (req, res, next) => {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: errors.emailIsBlank });    
  }
  next();
},
validatePassword: async (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: errors.passwordIsBlank }); 
}
next();
},

};

module.exports = validateEmailPassword;
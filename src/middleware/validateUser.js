const errors = {
  displayNameLength: '"displayName" length must be at least 8 characters long',
  emailIsNotValid: '"email" must be a valid email',
  passwordLength: '"password" length must be at least 6 characters long',
};

function validarEmail(email) {
  const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(email);
}

const validateUser = {
  validatDisplayName: async (req, res, next) => {
    const { displayName } = req.body;
    if (displayName.length < 8) {
      return res.status(400).json({ message: errors.displayNameLength });    
  }
  next();
},
validateEmail: async (req, res, next) => {
  const { email } = req.body;
  if (!validarEmail(email)) {
    return res.status(400).json({ message: errors.emailIsNotValid }); 
}
next();
},
validatePassword: async (req, res, next) => {
  const { password } = req.body;
  if (password.length < 6) {
    return res.status(400).json({ message: errors.passwordLength }); 
}
next();
},

};

module.exports = validateUser;
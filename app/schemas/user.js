const dictionary = require('../dictionary');
const { validationDomain } = require('../utils/validations');

exports.userSchema = {
  firstName: {
    in: ['body'],
    exists: true,
    errorMessage: dictionary.required('first_name')
  },
  email: {
    in: ['body'],
    errorMessage: dictionary.invalid('email'),
    exists: true,
    isEmail: true,
    custom: {
      options: value => validationDomain(value)
    }
  },
  password: {
    in: ['body'],
    isAlphanumeric: true,
    exists: true,
    errorMessage: dictionary.invalid('password'),
    isLength: {
      options: { min: 8 }
    }
  },
  lastName: {
    in: ['body'],
    exists: true,
    errorMessage: dictionary.required('last_name')
  }
};

exports.signInSchema = {
  email: {
    in: ['body'],
    errorMessage: dictionary.invalid('email'),
    exists: true,
    isEmail: true,
    custom: {
      options: value => validationDomain(value)
    }
  },
  password: {
    in: ['body'],
    exists: true,
    errorMessage: dictionary.required('password')
  }
};

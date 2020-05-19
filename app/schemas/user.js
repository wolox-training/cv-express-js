const dictionary = require('../dictionary');

const availableDomains = ['wolox.co', 'wolox.com.ar', 'wolox.mx', 'wolox.cl'];

exports.userSchema = {
  firstName: {
    in: ['body'],
    exists: true,
    errorMessage: dictionary.required('first name')
  },
  email: {
    in: ['body'],
    errorMessage: dictionary.invalid('email'),
    exists: true,
    isEmail: true,
    custom: {
      options: value => {
        const [, domain] = value.split('@');
        return availableDomains.some(domainOpt => domainOpt === domain);
      }
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
    errorMessage: dictionary.required('last name')
  }
};

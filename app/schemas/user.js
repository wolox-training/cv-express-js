const availableDomains = ['wolox.co', 'wolox.com.ar', 'wolox.mx', 'wolox.cl'];

exports.userSchema = {
  firstName: {
    in: ['body'],
    exists: true,
    errorMessage: 'first name is required'
  },
  email: {
    in: ['body'],
    errorMessage: 'email is not valid',
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
    errorMessage: 'password is not valid',
    isLength: {
      options: { min: 8 }
    }
  },
  lastName: {
    in: ['body'],
    exists: true,
    errorMessage: 'last name is required'
  }
};

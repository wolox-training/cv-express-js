const { User } = require('../models');
const errors = require('../errors');
const logger = require('../logger');

exports.signUp = async body => {
  try {
    const user = await User.getUser({ email: body.email });
    if (user) {
      logger.info(`email already exist ${body.email}`);
      throw errors.existRegister('user');
    }
    return User.newUser(body);
  } catch (error) {
    throw error;
  }
};

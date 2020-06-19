const { User } = require('../models');
const errors = require('../errors');
const logger = require('../logger');
const { compareHash, generaToken } = require('../utils/session');

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

exports.signIn = async ({ email, password }) => {
  try {
    const user = await User.getUser({ email });
    if (user && (await compareHash(password, user.dataValues.password))) {
      logger.info(`${user.dataValues.email} sign in correctly`);
      return generaToken(user.dataValues);
    }
    logger.info(`wrong sign in user: ${email}`);
    throw errors.wrongCredentials('email or password');
  } catch (error) {
    throw error;
  }
};

const bcrypt = require('bcryptjs');
const { User } = require('../models');
const errors = require('../errors');
const logger = require('../logger');

const hashPassword = password => bcrypt.hash(password, parseInt(process.env.SALT));

const checkEmailExist = ({ email }) =>
  User.findOne({ where: { email } }).catch(err => {
    logger.error('An error occurred in data base');
    throw errors.databaseError(err.message);
  });

exports.signUp = async body => {
  try {
    const user = await checkEmailExist(body);
    if (user) {
      logger.info(`email already exist ${body.email}`);
      throw errors.existRegister('user');
    }
    const hashPass = await hashPassword(body.password);
    return User.create({ ...body, password: hashPass }).catch(err => {
      logger.error(`can't create user with email ${body.email}`);
      throw errors.databaseError(err);
    });
  } catch (e) {
    throw e;
  }
};

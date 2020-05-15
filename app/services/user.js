const bcrypt = require('bcryptjs');
const { User } = require('../models');
const errors = require('../errors');
const logger = require('../logger');

exports.hashPassword = password => bcrypt.hash(password, 10);

exports.checkEmailExist = ({ email }) =>
  User.findOne({ where: { email } }).catch(err => {
    logger.error('An error occurred in data base');
    throw errors.databaseError(err.message);
  });

exports.signUp = body =>
  this.hashPassword(body.password)
    .then(hashPassword => User.create({ ...body, password: hashPassword }))
    .catch(err => {
      logger.error(`can't create user with email ${body.email}`);
      throw errors.databaseError(err.message);
    });

const { users: Users } = require('../models');
const errors = require('../errors');
const logger = require('../logger');

exports.checkEmailExist = ({ email }) =>
  Users.findOne({ where: { email } }).catch(err => {
    logger.error('An error occurred in data base');
    throw errors.databaseError(err.message);
  });

exports.signUp = body =>
  this.hashPassword(body.password)
    .then(hashPassword => Users.create({ ...body, password: hashPassword }))
    .catch(err => {
      logger.error(`can't create user with email ${body.email}`);
      throw errors.databaseError(err.message);
    });

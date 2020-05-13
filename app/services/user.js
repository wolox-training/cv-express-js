const { users: Users } = require('../models');
const errors = require('../errors');

exports.checkEmailExist = ({ email }) =>
  Users.findOne({ where: { email } }).catch(err => {
    throw errors.databaseError(err.message);
  });

exports.signUp = body =>
  this.hashPassword(body.password)
    .then(hashPassword => Users.create({ ...body, password: hashPassword }))
    .catch(err => {
      throw errors.databaseError(err.message);
    });

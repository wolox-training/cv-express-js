const { checkEmailExist, signUp } = require('../services/user');
const logger = require('../logger');
const errors = require('../errors');

exports.signUp = (req, res, next) => {
  checkEmailExist(req.body)
    .then(user => {
      if (user) {
        logger.info(`email already exist ${req.body.email}`);
        throw errors.existUser();
      }
      return signUp({ ...req.body });
    })
    .then(({ dataValues }) => {
      logger.info(`user with email: ${dataValues.email} was created`);
      res.status(201).send();
    })
    .catch(next);
};

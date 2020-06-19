const { signUp, signIn } = require('../services/user');
const serializer = require('../serializers/user').signUp;
const logger = require('../logger');
const config = require('../../config');

exports.signUp = (req, res, next) =>
  signUp(req.body)
    .then(({ dataValues: { ...response } }) => {
      logger.info(`user with name: ${response.firstName} ${response.lastName} was created`);
      res.status(201).send(serializer(response));
    })
    .catch(next);

exports.signIn = (req, res, next) =>
  signIn(req.body)
    .then(token =>
      res
        .header({ [config.common.session.headerName]: token })
        .status(201)
        .send()
    )
    .catch(next);

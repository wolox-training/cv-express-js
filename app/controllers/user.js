const { signUp } = require('../services/user');
const serializer = require('../serializers/user').signUp;
const logger = require('../logger');

exports.signUp = (req, res, next) =>
  signUp(req.body)
    .then(({ dataValues: { ...response } }) => {
      logger.info(`user with name: ${response.firstName} ${response.lastName} was created`);
      res.status(201).send(serializer(response));
    })
    .catch(next);

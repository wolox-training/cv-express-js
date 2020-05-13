const { checkSchema, validationResult } = require('express-validator');
const errors = require('../errors');

exports.schemaValidator = schema => checkSchema(schema);

exports.validator = (req, res, next) => {
  const errorsOnRequest = validationResult(req);
  if (!errorsOnRequest.isEmpty()) {
    return res
      .status(422)
      .json({ errors: errorsOnRequest.array().map(error => errors.schemaValiation(error.msg)) });
  }
  return next();
};

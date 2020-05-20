const { checkSchema, validationResult } = require('express-validator');
const errors = require('../errors');

const schemaValidator = schema => checkSchema(schema);

const validator = (req, _, next) => {
  const errorsOnRequest = validationResult(req);
  if (!errorsOnRequest.isEmpty()) {
    throw errors.schemaValiation(errorsOnRequest.array().map(error => error.msg));
  }
  return next();
};

exports.paramsValidator = squema => [schemaValidator(squema), validator];

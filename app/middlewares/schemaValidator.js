const { checkSchema, validationResult } = require('express-validator');

exports.schemaValidator = schema => checkSchema(schema);

exports.validator = (req, res, next) => {
  const errorsOnRequest = validationResult(req);
  if (errorsOnRequest.isEmpty()) next();
  return res.status(422).json({ errors: errorsOnRequest.array() });
};

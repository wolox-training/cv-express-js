const dictionary = require('./dictionary');

const internalError = (message, internalCode) => ({
  message,
  internalCode
});

exports.DATABASE_ERROR = 'database_error';
exports.databaseError = message => internalError(message, exports.DATABASE_ERROR);

exports.DEFAULT_ERROR = 'default_error';
exports.defaultError = message => internalError(message, exports.DEFAULT_ERROR);

exports.EXIST_REGISTER = 'exist_register';
exports.existRegister = entity => internalError(dictionary.exist(entity), exports.EXIST_REGISTER);

exports.SCHEMA_VALIDATION = 'schema_validation';
exports.schemaValiation = errors => internalError(errors, exports.SCHEMA_VALIDATION);

exports.WRONG_CREDENTIALS = 'wrong_credentials';
exports.wrongCredentials = message => internalError(dictionary.wrong(message), exports.WRONG_CREDENTIALS);

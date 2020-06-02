const config = require('../../config');

const availableDomains = config.common.validations.domains.split(',');

exports.validationDomain = value => {
  const [, domain] = value.split('@');
  return availableDomains.some(domainOpt => domainOpt === domain);
};

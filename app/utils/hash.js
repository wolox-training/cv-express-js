const bcrypt = require('bcryptjs');
const config = require('../../config');

const salt = bcrypt.genSaltSync(parseInt(config.common.session.salt));

exports.hashPassword = password => bcrypt.hashSync(password, salt);

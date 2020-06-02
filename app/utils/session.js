const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const salt = bcrypt.genSaltSync(parseInt(config.common.session.salt));

exports.hashPassword = password => bcrypt.hashSync(password, salt);

exports.compareHash = (password, hash) => bcrypt.compareSync(password, hash);

exports.generaToken = ({ id }) => jwt.sign({ userId: id }, config.common.session.secret);

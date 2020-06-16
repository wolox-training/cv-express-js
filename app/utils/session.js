const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../../config');

const { secret, expiresIn, salt: saltConfig } = config.common.session;

const salt = bcrypt.genSaltSync(parseInt(saltConfig));

exports.hashPassword = password => bcrypt.hashSync(password, salt);

exports.compareHash = (password, hash) => bcrypt.compareSync(password, hash);

exports.generaToken = ({ id }) => jwt.sign({ userId: id }, secret, { expiresIn });

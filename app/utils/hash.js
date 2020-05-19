const bcrypt = require('bcryptjs');

exports.hashPassword = password => bcrypt.hash(password, parseInt(process.env.SALT));

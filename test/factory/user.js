const { factory } = require('factory-girl');
const { mockUser } = require('../constants');
const db = require('../../app/models');
const { hashPassword } = require('../../app/utils/session');

factory.define('User', db.User, { ...mockUser, password: () => hashPassword(mockUser.password) });

exports.createUser = () => factory.create('User');

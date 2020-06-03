const { factory } = require('factory-girl');
const { mockUser } = require('../constants');
const { hashPassword } = require('../../app/utils/session');
const { factoryByModel } = require('./factory_by_models');

factoryByModel('User', { ...mockUser, password: () => hashPassword(mockUser.password) });

exports.createUser = () => factory.create('User');

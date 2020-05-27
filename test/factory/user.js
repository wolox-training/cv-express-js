const { factory } = require('factory-girl');
const { factoryWithCustomizedValue } = require('./factory_by_models');
const { mockUser } = require('../constants');

factoryWithCustomizedValue('User', 'email', mockUser.email);

exports.createUser = () => factory.create('User');

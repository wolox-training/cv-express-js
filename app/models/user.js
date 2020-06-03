const errors = require('../errors');
const logger = require('../logger');
const { hashPassword } = require('../utils/hash');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      firstName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      timestamps: false,
      tableName: 'users',
      freezeTableName: true,
      underscored: true
    }
  );

  User.newUser = async data =>
    User.create({ ...data, password: await hashPassword(data.password) }).catch(err => {
      logger.error(`can't create user with email ${data.email}`);
      throw errors.databaseError(err);
    });

  User.getUser = query =>
    User.findOne({ where: query }).catch(err => {
      logger.error('An error occurred in data base');
      throw errors.databaseError(err.message);
    });

  return User;
};

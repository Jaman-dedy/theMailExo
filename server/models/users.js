'use strict';

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    pwd: DataTypes.STRING,
    isadmin: DataTypes.BOOLEAN
  }, {});
  users.associate = function(models) {
    // associations can be defined here
  };
  return users;
};
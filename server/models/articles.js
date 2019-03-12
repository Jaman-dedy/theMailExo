'use strict';
module.exports = (sequelize, DataTypes) => {

  const articles = sequelize.define('articles', {

    body: DataTypes.STRING

  }, {});
  
  articles.associate = function(models) {
    // associations can be defined here
  };
  return articles;
};
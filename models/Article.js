
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
  
  const Article = sequelize.define('article', {
    title : DataTypes.STRING,
created_at : DataTypes.DATE,
updated_at : DataTypes.DATE,
content : DataTypes.STRING,
user_id : DataTypes.INTEGER,
user_id : DataTypes.INTEGER,

      },{underscored: true}
    );

    
    

  Article.associate = (models) => {
      Article.belongsTo(models.User) 
 
  }    
  return Article
}
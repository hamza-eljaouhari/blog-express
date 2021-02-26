
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

module.exports = (sequelize, DataTypes) => {
  
  const Comment = sequelize.define('comment', {
    content : DataTypes.STRING,
created_at : DataTypes.DATE,
updated_at : DataTypes.DATE,
likes : DataTypes.INTEGER,
dislikes : DataTypes.INTEGER,
article_id : DataTypes.INTEGER,
user_id : DataTypes.INTEGER,
article_id : DataTypes.INTEGER,
user_id : DataTypes.INTEGER,

      },{underscored: true}
    );

    
    

  Comment.associate = (models) => {
      Comment.belongsTo(models.Article) 
 Comment.belongsTo(models.User) 
 
  }    
  return Comment
}
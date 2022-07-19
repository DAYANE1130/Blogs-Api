const createPostCategory = (sequelize,DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
{
 postId:{ type:DataTypes.INTEGER, foreignKey:true},
 categoryId:{ type:DataTypes.INTEGER, foreignKey:true},
},
{timestamps:false,
  tableName:'PostCategories'
}
 );

  PostCategory.associate = (models) => {
  models.Category.belongsToMany(models.BlogPost, { // uma categoria pode pertencer a muitos POsts
    through:PostCategory,
    // as: 'BlogPost',
    foreignKey:'categoryId',
    otherKey:'postId',
  }); 
  models.BlogPost.belongsToMany(models.Category, { // um post pode pertencer a muitas categorias
    through:PostCategory,
    // as:'categories',
    foreignKey:'postId',
    otherKey:'categoryId',
  });

  };
  return PostCategory;
}
  module.exports = createPostCategory;
const createBlogPost = (sequelize,DataTypes) => {
  const BlogPost = sequelize.define('BlogPost', 
{
 id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
  title:DataTypes.STRING,
  content:DataTypes.STRING,
  userId:{type:DataTypes.INTEGER,foreignKey:true}
},
{ createdAt: 'published',updatedAt: 'updated' },
{timestamps:false}
 );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User,{
      foreignKey:'userId'})
    };
  return BlogPost;
  };
  
  module.exports = createBlogPost;
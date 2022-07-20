const createBlogPost = (sequelize, DataTypes) => {
  const BlogPost = sequelize.define(
    'BlogPost',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      title: { type: DataTypes.STRING, defaultValue: DataTypes.STRING },
      content: { type: DataTypes.STRING, defaultValue: DataTypes.STRING },
      userId: { type: DataTypes.INTEGER, foreignKey: true },
      published: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
      updated: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    },
    { timestamps: false,
     }
  );

  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId',
      as:'user'
    });
  };
  return BlogPost;
};

module.exports = createBlogPost;

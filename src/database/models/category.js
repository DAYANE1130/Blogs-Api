const createCategory = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    'Category',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      name: { type: DataTypes.STRING, defaultValue: DataTypes.STRING },
    },
    {
      timestamps: false,
    }
  );

  // BlogPost.associate = (models) => {
  //   BlogPost.belongsTo(models.User,{
  //     foreignKey:'userId'})
  //   };
  return Category;
};

module.exports = createCategory;

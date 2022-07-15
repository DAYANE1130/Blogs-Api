  const createUser = (sequelize,DataTypes) => {
    const User = sequelize.define('User', {
    id:{ type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    displayName:{type:DataTypes.STRING},
    email:{type:DataTypes.STRING,  allowNull: false,},
    password:{type:DataTypes.STRING,  allowNull: false,},
    image:{type:DataTypes.STRING},
    
    }, {
    // timestamps:false,
    });
  
    User.associate = (models) => {
      User.hasMany(models.BlogPost,{
        foreignKey:'userId'}) // OU id????? passa dos 2 jeitos
      };
    return User;
    };
    
    module.exports = createUser;
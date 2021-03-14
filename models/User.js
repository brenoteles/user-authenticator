const { Model, DataTypes } = require('sequelize');

class User extends Model{
  static init(sequelize){
    super.init({
      email: DataTypes.STRING(254),
      password: DataTypes.STRING(60),
      type: DataTypes.INTEGER,
    }, {
      sequelize,
      modelName: 'User',
      tableName: 'User',
      timestamps: false,
    })
  }
}

module.exports = User;
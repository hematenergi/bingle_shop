const Sequelize = require("sequelize")
const sequelizeConfig = require("./sequelize")

class Users extends Sequelize.Model {}

Users.init(
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING,
    },
    email: {
      type: Sequelize.DataTypes.STRING,
    },
    password: {
      type: Sequelize.DataTypes.STRING,
    },
    address: {
      type: Sequelize.DataTypes.TEXT,
    },
  },
  {
    sequelize: sequelizeConfig,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: "Users",
  }
)

module.exports = Users

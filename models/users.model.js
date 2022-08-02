const Sequelize = require("sequelize")
const sequelizeConfig = require("./sequelizeConfig")

class tbl_users extends Sequelize.Model {}

tbl_users.init(
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
    address: {
      type: Sequelize.DataTypes.TEXT,
    },
    password: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    sequelize: sequelizeConfig,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: "tbl_users",
  }
)

module.exports = tbl_users

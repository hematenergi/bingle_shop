const Sequelize = require("sequelize")
const sequelizeConfig = require("./sequelizeConfig")

class itemModel extends Sequelize.Model {}

itemModel.init(
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
    price: {
      type: Sequelize.DataTypes.INTEGER,
    },
    stock: {
      type: Sequelize.DataTypes.INTEGER,
    },
  },
  {
    sequelize: sequelizeConfig,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: "tbl_items",
  }
)

module.exports = itemModel

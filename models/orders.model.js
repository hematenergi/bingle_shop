const Sequelize = require("sequelize")
const sequelizeConfig = require("./sequelizeConfig")

class orderModel extends Sequelize.Model {}

orderModel.init(
  {
    order_id: {
      type: Sequelize.DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      unique: true,
    },
    order_date: {
      type: Sequelize.DataTypes.DATE,
    },
    user_id: {
      type: Sequelize.DataTypes.INTEGER,
      references: {
        model: "tbl_users",
        key: "user_id",
      },
    },
    status: {
      type: Sequelize.DataTypes.STRING,
    },
    total_price: {
      type: Sequelize.DataTypes.INTEGER,
    },
  },
  {
    sequelize: sequelizeConfig,
    timestamps: true,
    underscored: true,
    paranoid: true,
    freezeTableName: true,
    tableName: "tbl_order_items",
  }
)

module.exports = orderModel

const Sequelize = require("sequelize")
const sequelizeConfig = require("./sequelizeConfig")

class tbl_orders extends Sequelize.Model {}

tbl_orders.init(
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
        key: "id",
      },
      onUpdate: "cascade",
      onDelete: "cascade",
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
    tableName: "tbl_order",
  }
)

module.exports = tbl_orders

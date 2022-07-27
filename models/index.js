const Users = require("./users.model")
const sequelize = require("./sequelize")

// Users.belongsTo(Roles, {
//   as: "role",
//   foreignKey: "role_id",
// })

module.exports = {
  sequelize,
  Users,
}

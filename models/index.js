const Users = require("./users")
const sequelize = require("./sequelize")

// Users.belongsTo(Roles, {
//   as: "role",
//   foreignKey: "role_id",
// })

module.exports = {
  sequelize,
  Users,
}

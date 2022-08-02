const { tbl_items } = require("../models")

const getItems = async (req, res) => {
  const items = await tbl_items.findAll({
    attributes: {
      exclude: ["createdAt", "updatedAt", "deletedAt"],
    },
  })

  return res.status(200).json({
    message: "Welcome to items API",
    data: items,
  })
}

module.exports = {
  getItems,
}

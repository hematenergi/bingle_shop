const itemModel = require("../models/items.model")

const getItems = async (req, res) => {
  const items = await itemModel.findAll({
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

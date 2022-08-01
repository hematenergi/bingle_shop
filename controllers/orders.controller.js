const { Orders, OrderItems } = require("../models")

const getOrder = (req, res) => {
  res.status(200).json({
    message: "Get order success",
  })
}

const createOrder = async (req, res, next) => {
  try {
    // list item from a postman
    const { items } = req.body

    const order = await Orders.create({
      user_id: req.user_id,
    })

    const order_id = order.id

    const order_items = await Promise.all(
      items.map(async (item) => {
        const order_item = await OrderItems.create({
          order_id,
          item_id: item.id,
          quantity: item.quantity,
        })
        return order_item
      })
    )

    return res.status(201).json({
      message: "Create order success",
      order_id,
      order_items,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getOrder,
  createOrder,
}

const { Orders, OrderItems } = require("../models")

const getOrder = (req, res) => {
  res.status(200).json({
    message: "Get order success",
  })
}

const createOrder = async (req, res, next) => {
  try {
    // list item from a postman
    // const { items } = req.body

    console.log(req.user_id, "user_id")

    const items = [
      {
        item_id: 1,
        quantity: 1,
        price: 100000,
      },
      {
        item_id: 2,
        quantity: 2,
        price: 200000,
      },
    ]

    const order = await Orders.create({
      order_data: new Date(),
      user_id: req.user_id,
      status: "pending",
      total_price: items.reduce(
        (acc, cur) => acc + cur.price * cur.quantity,
        0
      ),
    })

    // const order_id = order.id

    // const order_items = await Promise.all(
    //   items.map(async (item) => {
    //     const order_item = await OrderItems.create({
    //       order_id: 1,
    //       item_id: item.item_id,
    //       quantity: item.quantity,
    //       price: item.price,
    //       total_price: item.quantity * item.price,
    //     })
    //     return order_item
    //   })
    // )

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

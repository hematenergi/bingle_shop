const {
  tbl_orders,
  tbl_order_items,
  tbl_items,
  sequelize,
} = require("../models")
const { Op } = require("sequelize")
const { formatDateCustom } = require("../utils/helper")

const getOrder = (req, res) => {
  res.status(200).json({
    message: "Get order success",
  })
}

const createOrder = async (req, res, next) => {
  try {
    console.log(req.user_id, "user_id from context")

    // list item from a postman
    const { items } = req.body
    const itemFromBody = items
    console.log(itemFromBody, "itemFromBody")

    // search item id from tbl_items
    const itemIds = itemFromBody.map((item) => item.item_id)

    const existItem = await tbl_items.findAll({
      where: {
        id: {
          [Op.in]: itemIds,
        },
        stock: {
          // [Op.gte]: itemFromBody.reduce((acc, item) => acc + item.quantity, 0),
          [Op.gte]: itemFromBody.reduce((acc, item) => acc + item.quantity, 0),
        },
      },
    })
    console.log(existItem, "existItem")

    // check if item exist
    if (existItem.length !== itemFromBody.length) {
      throw {
        code: 400,
        message: "Item not found",
      }
    }

    await sequelize.transaction(async (trx) => {
      const transaction = await tbl_orders.create(
        {
          user_id: req.user_id,
          order_date: new Date(),
          status: "pending",
          total_price: itemFromBody.reduce(
            (acc, item) => acc + item.price * item.quantity,
            0
          ),
        },
        {
          transaction: trx,
        }
      )

      await Promise.all(
        existItem.map(async (item) => {
          const selectedPayload = itemFromBody.find(
            (val) => val.item_id === item.id
          )
          console.log(selectedPayload, "selectedPayload")

          await tbl_items.update(
            {
              stock: item.stock - selectedPayload.quantity,
            },
            {
              where: {
                id: item.id,
              },
              transaction: trx,
            }
          )

          // create transaction item
          await tbl_order_items.create(
            {
              order_id: transaction.id,
              item_id: item.id,
              quantity: selectedPayload.quantity,
              price: item.price,
              total_price: item.price * selectedPayload.quantity,
            },
            {
              transaction: trx,
            }
          )
        })
      )
    })

    return res.status(201).json({
      message: "Create order success",
      existItem,
      // data: order,
      // order_id,
      // data: order_items,
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getOrder,
  createOrder,
}

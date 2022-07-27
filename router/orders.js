const { getOrder } = require("../controllers/ordersController")

const router = require("express").Router()

router.get("/", getOrder)

module.exports = router

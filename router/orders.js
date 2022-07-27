const { getOrder } = require("../controllers/orders.controller")

const router = require("express").Router()

router.get("/", getOrder)

module.exports = router

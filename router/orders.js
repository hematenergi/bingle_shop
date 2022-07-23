const { getOrder } = require("../controllers/orders")

const router = require("express").Router()

router.get("/", getOrder)

module.exports = router

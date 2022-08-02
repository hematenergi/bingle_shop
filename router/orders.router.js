const {
  getOrder,
  createOrder,
  updateStatusOrder,
} = require("../controllers/orders.controller")
const { authorization } = require("../middleware/authorization.middleware")

const router = require("express").Router()

router.get("/", getOrder)
router.post("/create-order", authorization(), createOrder)
router.patch("/update-order", authorization(), updateStatusOrder)

module.exports = router

const { getItems } = require("../controllers/items")

const router = require("express").Router()

router.get("/", getItems)

module.exports = router

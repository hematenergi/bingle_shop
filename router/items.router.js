const { getItems } = require("../controllers/items.controller")

const router = require("express").Router()

router.get("/", getItems)

module.exports = router

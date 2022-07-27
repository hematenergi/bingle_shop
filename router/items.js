const { getItems } = require("../controllers/itemsController")

const router = require("express").Router()

router.get("/", getItems)

module.exports = router

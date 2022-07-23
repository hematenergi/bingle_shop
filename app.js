// import
require("dotenv").config()
require("express-group-routes")
const express = require("express")
const app = express()

const userRouter = require("./router/users")
const itemRouter = require("./router/items")
const orderRouter = require("./router/orders")

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// initial endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
  })
})

// router
app.group("/api/v1", (router) => {
  // user router
  router.use("/users", userRouter)
  // item router
  router.use("/items", itemRouter)
  // order router
  router.use("/orders", orderRouter)
})

// 404 middleware
app.use("*", (req, res, next) =>
  res.status(404).json({ message: "endpoint not found" })
)

// error middleware
app.use((err, req, res, next) => {
  logger.error(JSON.stringify(err.message))
  console.log(err)

  return res
    .status(err?.code || 500)
    .json({ message: err?.message || "Internal server error" })
})

module.exports = app

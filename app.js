// import
require("dotenv").config()
require("express-group-routes")
const express = require("express")
const app = express()
const winston = require("winston")

const userRouter = require("./router/users")
const itemRouter = require("./router/items")
const orderRouter = require("./router/orders")

// logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
})

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    })
  )
}

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

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
  console.log("error message : ", err.message)

  return res
    .status(err?.code || 500)
    .json({ message: err?.message || "Internal server error" })
})

module.exports = app

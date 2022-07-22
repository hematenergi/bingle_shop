// import
const express = require("express")
require("dotenv").config()
const rateLimit = require("express-rate-limit")

// var
const app = express()
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// middleware
app.use(limiter)

// endpoint
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Welcome to the API",
  })
})

module.exports = app

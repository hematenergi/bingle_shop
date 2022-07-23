const { getUser } = require("../controllers/user")

const router = require("express").Router()
const rateLimit = require("express-rate-limit")

const userLimitter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

router.get("/", userLimitter, getUser)

module.exports = router

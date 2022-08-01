require("dotenv").config()

const jwt = require("jsonwebtoken")

const authorization = (role) => (req, res, next) => {
  try {
    const { authorization } = req.headers
    const token = authorization.split(" ")[1]

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
    console.log(decoded, "decoded")

    req.user_id = decoded.user_id

    next()
  } catch (error) {
    next({ code: error.code || 401, message: error.message || "invalid token" })
  }
}

module.exports = {
  authorization,
}

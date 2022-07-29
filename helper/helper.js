const jwt = require("jsonwebtoken")

const generateAccessToken = (username) => {
  const secretKey = process.env.JWT_SECRET_KEY || "hemat_energi"
  const accessToken = jwt.sign({ username }, secretKey, {
    expiresIn: "1h",
  })
  return accessToken
}

module.exports = {
  generateAccessToken,
}

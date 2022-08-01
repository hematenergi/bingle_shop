const jwt = require("jsonwebtoken")
const { faker } = require("@faker-js/faker")
const bcrypt = require("bcrypt")

const generateAccessToken = (data) => {
  const secretKey = process.env.JWT_SECRET_KEY || "hemat_energi"
  const accessToken = jwt.sign(data, secretKey, {
    expiresIn: "1h",
  })
  return accessToken
}

const generateFakeUser = (qty) => {
  let users = []
  for (let i = 0; i < qty; i++) {
    users.push({
      name: faker.name.firstName() + " " + faker.name.lastName(),
      email: faker.internet.email().toLowerCase(),
      password: bcrypt.hashSync("admin123", 12),
      address:
        faker.address.street() +
        ", No." +
        faker.address.streetAddress() +
        " " +
        faker.address.cityName() +
        " - " +
        faker.address.streetSuffix() +
        " " +
        faker.address.zipCode(),
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
  return users
}

const generateFakeItem = (qty) => {
  let items = []
  for (let i = 0; i < qty; i++) {
    items.push({
      name: faker.commerce.productName(),
      price: faker.commerce.price(1000, 100000, 0),
      stock: faker.datatype.number({ min: 10, max: 100 }),
      created_at: new Date(),
      updated_at: new Date(),
    })
  }
  return items
}

module.exports = {
  generateAccessToken,
  generateFakeUser,
  generateFakeItem,
}

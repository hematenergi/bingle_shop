const Users = require("../models/users")
const bcrypt = require("bcrypt")

const getUser = (req, res) => {
  res.status(200).json({
    message: "Welcome to user API",
    data: [
      {
        id: 1,
        name: "John Doe",
        email: "johndoe@gmail.com",
        phone: "081234567890",
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "janedoe@gmail.com",
        phone: "081234567890",
      },
    ],
  })
}

const registerUser = async (req, res, next) => {
  try {
    const bodies = req.body

    const isUserExist = await Users.findOne({
      where: {
        email: bodies.email,
      },
      attributes: ["id"],
    })

    if (isUserExist) {
      throw {
        code: 400,
        message: "Email already exist",
      }
    }

    const hasedPassword = bcrypt.hashSync(bodies.password, 12)

    const user = await Users.create({
      email: bodies.email,
      password: hasedPassword,
      name: bodies.name,
    })

    return res.status(200).json({
      code: 200,
      message: "Success create user",
      data: {
        name: user.name,
        email: user.email,
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getUser,
  registerUser,
}

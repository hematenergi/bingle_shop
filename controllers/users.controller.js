const usersModel = require("../models/users.model")
const bcrypt = require("bcrypt")
const { generateAccessToken } = require("../utils/helper")

const getUser = async (req, res) => {
  const users = await usersModel.findAll({
    attributes: {
      exclude: ["password", "createdAt", "updatedAt", "deletedAt"],
    },
  })

  res.status(200).json({
    message: "Welcome to users API",
    data: users,
  })
}

const registerUser = async (req, res, next) => {
  try {
    const bodies = req.body

    const isUserExist = await usersModel.findOne({
      where: {
        email: bodies.email,
      },
      attributes: ["user_id"],
    })

    if (isUserExist) {
      throw {
        code: 400,
        message: "Email already exist",
      }
    }

    const hasedPassword = bcrypt.hashSync(bodies.password, 12)

    const user = await usersModel.create({
      email: bodies.email,
      password: hasedPassword,
      name: bodies.name,
      address: bodies.address,
    })

    return res.status(200).json({
      code: 200,
      message: "Success create user",
      data: {
        name: user.name,
        email: user.email,
        address: user.address,
      },
    })
  } catch (error) {
    next(error)
  }
}

const loginUser = async (req, res, next) => {
  try {
    const bodies = req.body

    const user = await usersModel.findOne({
      where: {
        email: bodies.email,
      },
    })

    if (!user) {
      throw {
        code: 400,
        message: "Email not found",
      }
    }

    const token =
      "Bearer " +
      generateAccessToken({
        user_id: user.user_id,
        email: user.email,
        password: user.password,
      })
    console.log(token, "token")

    const isPasswordValid = bcrypt.compareSync(bodies.password, user.password)

    if (!isPasswordValid) {
      throw {
        code: 400,
        message: "Password not match",
      }
    }

    return res.status(200).json({
      code: 200,
      message: "Success login",
      data: {
        name: user.name,
        email: user.email,
        token: token.split(" ")[1],
      },
    })
  } catch (error) {
    next(error)
  }
}

module.exports = {
  getUser,
  registerUser,
  loginUser,
}

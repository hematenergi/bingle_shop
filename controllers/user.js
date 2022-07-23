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

module.exports = {
  getUser,
}

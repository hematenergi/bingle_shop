const getOrder = (req, res) => {
  res.status(200).json({
    message: "Get order success",
  })
}

module.exports = {
  getOrder,
}

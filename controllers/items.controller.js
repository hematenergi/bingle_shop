const getItems = (req, res) => {
  res.status(200).json({
    message: "Welcome to items API",
    data: [
      {
        id: 1,
        name: "Item 1",
        price: 10000,
        description: "This is item 1",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Item 2",
        price: 20000,
        description: "This is item 2",
        image: "https://via.placeholder.com/150",
      },
      {
        id: 3,
        name: "Item 3",
        price: 30000,
        description: "This is item 3",
        image: "https://via.placeholder.com/150",
      },
    ],
  })
}

module.exports = {
  getItems,
}

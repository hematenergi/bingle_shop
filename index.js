// import app from "./app"
const app = require("./app")

const PORT = process.env.PORT || 5000

app.listen(PORT, () =>
  console.log(`Server Running On Port  http://localhost:${PORT}`)
)

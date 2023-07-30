const express = require("express")

const app = express()
const port = process.env.PORT || 4000

app.get("/", (req, res) => {
  res.send(`Render on port ${port}`)
})

app.listen(port, () => console.log(`on port ${port}`))
module.exports = app

const express = require("express")

const app = express()
const port = process.env.PORT || 4000
const service = process.env.SERVICE || "NODE"

app.get("/", (req, res) => {
  res.send(`${service} on port ${port}`)
})

app.listen(port, () => console.log(`${service} on port ${port}`))
module.exports = app

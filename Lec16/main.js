const express = require("express")
const apiRouter = require("./api/api")
const app = express()

const PORT = 3030

app.use(express.json())

app.use("/api", apiRouter)

app.listen(PORT, () => {
    console.log('server is running on http://localhost/3030')
})
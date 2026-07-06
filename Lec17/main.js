const express = require("express")
const apiRouter = require("./api/api")
const app = express()

app.use(express.json())

const PORT =  3030

app.use("/api", apiRouter)

app.listen(PORT, () => {
    console.log('server is running on http://localhost:3030')
})
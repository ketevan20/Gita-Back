const express = require("express")
const connectToDB = require("./config/connectToMongoDB")
const userRouter = require("./api/user.router")
const app = express()

const PORT = 3030

app.use(express.json())
app.use("/users", userRouter)

connectToDB()

app.get("/", (req, res) => {
    console.log("server is running on http://localhost:3030")
})

app.listen(PORT, () => {
    console.log("server is running on http://localhost:3030")
})
const express = require("express")
const connectToDB = require("./config/connectToMongoDB")
const userRouter = require("./routes/user.router")
const expensesRoute = require("./routes/expenses.route")
const isAuth = require("./middlewares/isAuth.middleware")
const authRouter = require("./auth/auth.router")
const app = express()

const PORT = 3030

app.use(express.json())

connectToDB()

app.use("/users", userRouter)
app.use("/expenses", isAuth,expensesRoute)
app.use("/auth", authRouter)

app.get("/", (req, res) => {
    res.json("Hello World!")
})

app.listen(PORT, (req, res) => {
    console.log("server is running on http://localhost:3030")
})
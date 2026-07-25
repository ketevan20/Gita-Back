const express = require("express")
const cors = require('cors');
const connectToDB = require("./config/connectToDB")
const userRouter = require("./routes/user.router")
const isAuth = require("./middlewares/isAuth.middleware")
const postsRouter = require("./routes/posts.route")
const authRouter = require("./auth/auth.router")
const app = express()

require("dotenv").config()

app.use(express.json())
app.use(cors())

connectToDB()

app.use("/users", userRouter)
app.use("/posts", isAuth, postsRouter)
app.use("/auth", authRouter)

const PORT = 3030

app.listen(PORT, () => {
    console.log("server is runnign on http://localhost:3030")
})

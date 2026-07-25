const { Router } = require("express")
const postsModel = require("../models/posts.model")

const postsRouter = Router()

postsRouter.get("/", async (req, res) => {
    const posts = await postsModel.find()
    res.json({message: "posts retrieved successfully", data: posts})
})

module.exports = postsRouter
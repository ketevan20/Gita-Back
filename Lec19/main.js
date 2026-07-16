const express = require("express")
const connectToDB = require("./config/connectToMongoDB")
const productModel = require("./models/product.model")
const { isValidObjectId } = require("mongoose")
const app = express()

const PORT = 3030

app.use(express.json())

connectToDB()

app.get("/", (req, res) => {
    res.json("Hello World")
})

app.get("/products", async (req, res) => {
    let { page=1, limit=3 } = req.query
    limit > 3 ? limit = 3 : limit
    const findAllInfo = await productModel.find()
    res.json(findAllInfo.slice((page - 1) * limit, limit * page))
})

app.get("/products/:id", async (req, res) => {
    const { id } = req.params
    if (!isValidObjectId) return res.json({ message: "invalid ID" })
    const product = await productModel.findById(id)
    res.json(product)
})

app.post("/products", async (req, res) => {
    const { name, price, category, description } = req.body
    if (!name || !price || !category || price < 2 || price > 4000) {
        return res.json({ message: "Invalid data" })
    }
    const createProduct = await productModel.create({ name, price, category, description })
    res.json({ message: "created successfully", data: createProduct })
})

app.delete("/products/:id", async (req, res) => {
    const { id } = req.params
    if (!isValidObjectId(id)) return res.json({ message: "Invalid ID" })
    const deleteProduct = await productModel.findByIdAndDelete(id)
    res.json({ message: "deleted", data: deleteProduct })
})

app.put("/products/:id", async (req, res) => {
    const { id } = req.params
    const { name, price, category, description } = req.body
    if (!name || !price || !category || price < 2 || price > 4000) {
        return res.json({ message: "Invalid data" })
    }
    if (!isValidObjectId(id)) return res.json({ message: "Invalid ID" })
    const updatedProduct = await productModel.findByIdAndUpdate(id, { name, price, category, description }, { new: true })
    res.json({ message: "updated succesfully", data: updatedProduct })
})

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})


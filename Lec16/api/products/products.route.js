const { Router } = require("express")
const { pagination, getById, deleteProduct, updateProduct, createProduct, secretRoute } = require("./products.service")
const productsRouter = Router()
const isAdminMiddleware = require("../../middlewares/isAdmin.middleware")
const isEditorMiddleware = require("../../middlewares/isEditor.middleware")


productsRouter.get("/", pagination)
productsRouter.get("/secret", isAdminMiddleware, secretRoute)
productsRouter.get("/:id", getById)
productsRouter.post("/", createProduct)
productsRouter.delete('/:id', isAdminMiddleware, deleteProduct)
productsRouter.put("/:id", isAdminMiddleware, isEditorMiddleware, updateProduct)

module.exports = productsRouter
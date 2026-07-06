const { Router } = require("express")
const { pagination, getById, deleteOrder, updateOrder, createOrder, secretRoute, updateStatus } = require("./orders.service")
const loggerMiddleware = require("../../middlewares/logger.middleware")
const isAdminMiddleware = require("../../middlewares/isAdmin.middleware")
const isEditorMiddleware = require("../../middlewares/isEditor.middleware")
const router = Router()

router.get("/", loggerMiddleware, pagination)
router.get("/secret", loggerMiddleware, isAdminMiddleware, secretRoute)
router.get("/:id", loggerMiddleware, getById)
router.patch("/:id/status", loggerMiddleware, isEditorMiddleware, updateStatus)
router.post("/", loggerMiddleware, createOrder)
router.put("/:id", loggerMiddleware, isAdminMiddleware, updateOrder)
router.delete("/:id", loggerMiddleware, isAdminMiddleware, deleteOrder)

module.exports = router
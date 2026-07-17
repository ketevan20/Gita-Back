const { Router } = require("express")
const { findAll, getById, createUser, deleteUser, updateUser } = require("./user.service")
const userRouter = Router()

userRouter.get("/", findAll)
userRouter.get("/:id", getById)
userRouter.post("/", createUser)
userRouter.delete("/:id", deleteUser)
userRouter.put("/:id", updateUser)

module.exports = userRouter
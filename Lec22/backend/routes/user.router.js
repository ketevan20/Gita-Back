const { Router } = require("express")
const usersModel = require("../models/users.model")
const { isValidObjectId } = require("mongoose")

const userRouter = Router()

userRouter.get("/", async (req, res) => {
    const users = await usersModel.find().select("-password")
    res.json({ message: "users retireved succesfully", data: users })
})

userRouter.get("/:id", async (req, res) => {
    const { id } = req.params
    if (!isValidObjectId(id)) return res.status(200).json({ message: "Invalid ID" })
    const user = await usersModel.findById(id).select("-password")
    if (!user) return res.status(400).json({ message: "error" })
    res.json({ message: "user found succesfully", data: user })
})

userRouter.delete("/:id", async (req, res) => {
    const { id } = req.params
    if (!isValidObjectId(id)) return res.status(400).json({ message: "Invalid ID" })
    const deletedUser = await usersModel.findByIdAndDelete(id).select("-password")
    res.json({ message: "user deleted succesfully", data: deletedUser })
})

userRouter.put("/:id", async (req, res) => {
    const { id } = req.params
    const { fullName, email, password } = req.body
    if (!isValidObjectId(id)) return res.status(400).json({ message: "Invalid ID" })
    const updatedUser = usersModel.findByIdAndUpdate(id, {fullName, email, password}, {new: true}).select("-password")
    res.json({message: "user updated successfully", data: updatedUser})
})

module.exports = userRouter
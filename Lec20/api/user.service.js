const { isValidObjectId } = require("mongoose")
const userModel = require("../models/user.model")

const findAll = async (req, res) => {
    const findAllInfo = await userModel.find()
    res.json({ message: "Users retrieved successfully", data: findAllInfo })
}

const getById = async (req, res) => {
    const { id } = req.params
    if (!isValidObjectId(id)) return res.json({ message: "Invalid ID" })
    const user = await userModel.findById(id)
    if(!user) return res.json({message: "ver moidzebna"})
    res.json({ message: "User retrieved successfully", data: user })
}

const createUser = async (req, res) => {
    const { name, age, email } = req.body
    if (!name || typeof name !== "string" || !age || typeof age !== "number" || !email || typeof email !== "string") {
        return res.json({ message: "invalid data" })
    }
    const findUserByEmail = await userModel.findOne({ email: email })
    if (findUserByEmail) {
        return res.json({ message: "User already exists" })
    }
    const newUser = await userModel.create({ name, age, email })
    res.json({ message: "User created successfully", data: newUser })
}

const deleteUser = async (req, res) => {
    const { id } = req.params
    if (!isValidObjectId(id)) return res.json({ message: "invalid ID" })
    const deletedUser = await userModel.findByIdAndDelete(id)
    res.json({ message: "Users deleted successfully", data: deletedUser })
}

const updateUser = async (req, res) => {
    const { id } = req.params
    const { name, age, email } = req.body
    if (!isValidObjectId(id)) return res.json({ message: "invalid ID" })
    const findUserAndUpdate = await userModel.findByIdAndUpdate(id, {name, age, email}, {new: true})
    res.json({message: "Users updated successfully", data: findUserAndUpdate})
}

module.exports = { findAll, getById, deleteUser, createUser, updateUser}
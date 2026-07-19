const { Router } = require("express")
const { default: mongoose } = require("mongoose")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const usersModel = require("../models/users.model")

const authRouter = Router()

authRouter.post("/sign-up", async (req, res) => {
    const { fullName, email, password } = req.body

    if (!fullName || !email || !password) return res.status(400).json({ message: "All fields are required" })

    const existingUser = await usersModel.findOne({email: email})

    if(existingUser) return res.status(400).json({message: "User already exists"})

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await usersModel.create({fullName, email, password: hashedPassword})

    res.json({message: "User created succesfully"})
})

authRouter.post("/sign-in", async (req, res) => {
    const { email, password } = req.body

    if(!email || !password) {
        return res.status(400).json({message: "All fields are required"})
    } 

    const existingUser = await usersModel.findOne({email: email})

    if(!existingUser) return res.status(400).json({message: "user does not exists"})
    
    const isEqualPassword = await bcrypt.compare(password, existingUser.password)

    if(!isEqualPassword) return res.status(400).json({message: "password is incorrect"})
    
    const payload = {
        userId: existingUser._id
    }

    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn: "1h"})

    res.json({message: "tokeni", data: token})
})

module.exports = authRouter

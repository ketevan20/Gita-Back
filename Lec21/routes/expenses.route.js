const { Router } = require("express")
const expensesModel = require("../models/expenses.model")

const expensesRoute = Router()

expensesRoute.get("/", async (req, res) => {
    const expenses = await expensesModel.find()
    res.json({message: "expenses retrieved succesfully", data: expenses})
})

module.exports = expensesRoute

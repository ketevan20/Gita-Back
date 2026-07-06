const { Router } = require("express")
const router = require("./orders/orders.route")

const apiRouter = Router()

apiRouter.use("/orders", router)

module.exports = apiRouter


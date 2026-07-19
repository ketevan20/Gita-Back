const { default: mongoose } = require("mongoose")
require("dotenv").config()

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected succesfully")
    } catch(err) {
        console.log(err)
    }
}

module.exports = connectToDB


const { default: mongoose } = require("mongoose")
require("dotenv").config()

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("წარმტებით დაკავშირდა")
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectToDB
const { default: mongoose } = require("mongoose");

const expensesSchema = new mongoose.Schema({
    title: {
        type: String
    },
    amount: {
        type: Number
    },
    category: {
        type: String
    },
    user: {
        type: mongoose.Types.ObjectId, ref: "user"
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("expenses", expensesSchema)
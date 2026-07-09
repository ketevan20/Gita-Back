const express = require("express");
const connectToDB = require('./config/connectToDB')
const app = express();

const PORT = 3030

app.use(express.json())
connectToDB()

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
})
const jwt = require("jsonwebtoken")

function getToken(headers) {
    if(!headers["authorization"]) {
        return null
    }
    const [type, token] = headers["authorization"].split(" ")
    return type === "Bearer" ? token : null
}

async function isAuth(req, res, next) {
    const token = getToken(req.headers)
    
    if(!token) return res.status(400).json({message: "Permission Denied"})

    try {
        const payload = jwt.verify(token, process.env.JWT_SECRET)
        console.log(payload)
        req.userId = payload.userId
        next()
    } catch (err) {
        return res.status(401).json({message: "Invalid token"})
    }
}

module.exports = isAuth
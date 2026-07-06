module.exports = (req, res, next) => {
    console.log("Request Method:", req.method, "Request URL:", req.originalUrl, "Request Time:", new Date().toISOString())
    next()
}
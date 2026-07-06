module.exports = (req, res, next) => {
    const { admin } = req.headers
    if (!admin || admin !== 'admin') return res.status(403).json({ error: "Access denied." })
    next()
}
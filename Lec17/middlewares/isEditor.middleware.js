module.exports = (req, res, next) => {
    const { editor } = req.headers
    if (!editor || editor !== 'editor') return res.status(403).json({ error: "Access denied." })
    next()
}
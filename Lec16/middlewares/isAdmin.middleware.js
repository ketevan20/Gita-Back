module.exports = (req, res, next) => {
    const isAdminRole = req.headers.admin
    if(!isAdminRole || isAdminRole !== "Admin") {
        return res.status(400).json({message: "error"})
    }
    next()
} 
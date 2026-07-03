module.exports = (req, res, next) => {
    const isEditorRole = req.headers.editor
    if(!isEditorRole || isEditorRole !== "editor") {
        return res.status(400).json({message: "error"})
    }
    next()
} 
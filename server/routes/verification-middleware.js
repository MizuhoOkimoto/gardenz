function verifyUser(req, res, next) {
    const authenticatedUser = req.user
    const { userId } = req.body

    if (authenticatedUser.id !== userId) {
        res.status(401).send()
        return
    }

    next()

}

module.exports = {
    verifyUser
}
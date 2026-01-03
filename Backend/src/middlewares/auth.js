import jwt from "jsonwebtoken"
export const isLoggedIn = (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.status(401).json({
                status: "Failed",
                messgae: "Please sign in first"
            })
        }
        const user = jwt.verify(token, process.env.JWT_SECRET_KEY)
        req.user = user
        next()
    } catch (err) {
        res.status(401).json({
            status: "Failed",
            messgae: "Please sign in first",
            error: err.messgae
        })
    }
}
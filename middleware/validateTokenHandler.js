const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken = asyncHandler(async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader && authHeader.startsWith("Bearer ")) {
        const token = authHeader.split(" ")[1];
        try {
            const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            req.user = decoded.user;  
            next();
        } catch (err) {
            res.status(401);
            throw new Error("User is not authorized");
        }

    } else {
        res.status(401);
        throw new Error("Authorization header missing or malformed");
    }
});

module.exports = validateToken;

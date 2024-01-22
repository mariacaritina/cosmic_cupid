require('dotenv').config()
const jwt = require('jsonwebtoken')

//we need to generate a token and authenticate a token 

function generateAccessToken(userId) { 
    return jwt.sign(userId, process.env.TOKEN_SECRET, {})
}

function authenticateToken(req, res, next) { 
    const token = req.get('Authorization')
    if (token === null) { 
        return res.status(401)
    }
    
    jwt.verify(token, process.env.TOKEN_SECRET, (error, user) => { 
        if(error) { 
            return res.status(405)
        }
        req.user = user
        next()
    })
}

module.exports = { 
    generateAccessToken,
    authenticateToken
}

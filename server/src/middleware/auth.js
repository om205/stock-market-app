import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const JWT_SECRET = process.env.JWT_SECRET || 'my_jwt_personal_secret!'

export const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token, JWT_SECRET)
        const user = await User.findOne({_id: decoded, 'tokens.token': token})
        if(!user) throw new Error('User not found')
        req.token = token
        req.user = user 
        next()
    } catch (e) {
        res.status(401).send(`Please authenticate first`)
    }
}

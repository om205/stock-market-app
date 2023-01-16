import mongoose from 'mongoose'
import validator from 'validator'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const JWT_SECRET = process.env.JWT_SECRET || 'my_jwt_personal_secret!'

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        validate(value) {
            if(!validator.isEmail(value))
            throw new Error(`Email is invalid`)
        }
    },
    password: {
        type: String,
        minLength: true,
        required: true,
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value<0) throw new Error('Age cannot be negative!')
        }
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    avatar: {
        type: Buffer
    }
},{
    timestamps: true
})

userSchema.method('toJSON', function() {
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.tokens
    delete userObject.avatar

    return userObject
})

userSchema.method('generateAuthToken', async function() {
    const user = this
    const token = jwt.sign({_id: user._id.toString()}, JWT_SECRET)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
})

userSchema.static('findByCredentials', async (email, password) => {
    const user = await User.findOne({email})
    if(!user) throw {error:'not able to login'}
    const isMatch = await bcrypt.compare(password, user.password)
    if(!isMatch) throw {error:'unable to login'}
    return user
})

userSchema.pre('save', async function(next) {
    const user = this
    if(user.isModified('password'))
    user.password = await bcrypt.hash(user.password, 8)
    next()
})

const User = mongoose.model('users', userSchema)

export default User
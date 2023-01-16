import User from '../models/user.js'

export const createUser = async (req,res) => {
    const user = new User(req.body)
    try {
        await user.save()
        const token = await user.generateAuthToken()
        res.status(201).send({user, token})
    } catch (e) {
        res.status(400).send(e)
    }
}

export const loginUser = async (req,res) => {
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user, token})
    } catch(error) {
        res.status(400).send(error)
    }
}

export const logoutUser = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter(token => token.token !== req.token)
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
}

export const logoutUserAll = async (req, res) => {
    try {
        req.user.tokens = []
        await req.user.save()
        res.send()
    } catch (e) {
        res.status(500).send()
    }
}

export const accountDetail = async (req, res) => {
    res.send(req.user)
}

export const updateAccount = async (req, res) => {
    const Updates = Object.keys(req.body)
    const AllowedUpdates = ['name', 'age', 'email', 'password']
    const isValidOperation = Updates.every(update => AllowedUpdates.includes(update))
    if(!isValidOperation) return res.status(400).send({error: "invalid updates"})
    try {
        Updates.forEach(update=>req.user[update] = req.body[update])
        await req.user.save()
        res.send(req.user)
    } catch (e) {
        res.status(400).send()
    }
}

export const deleteAccount = async (req, res) => {
    try {
        await req.user.remove()
        sendCancellationEmail(req.user.email, req.user.name)
        res.send(req.user)
    } catch (e) {
        res.status(500).send()
    }
}

export const uploadProfilePhoto = async (req, res) => {
    const buffer = await sharp(req.file.buffer).resize({ width: 250, height: 250 }).png().toBuffer()
    req.user.avatar = buffer
    await req.user.save()
    res.send()
}

export const profileUploadError = (error, req, res, next) => {
    res.status(400).send({error: error.message})
}

export const deleteProfilePhoto = async (req, res) => {
    req.user.avatar = undefined
    await req.user.save()
    res.send()
}

export const getProfilePhoto = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)

        if(!user || !user.avatar) 
        throw new Error()

        res.set('Content-Type',  'image/png')
        res.send(user.avatar)
    } catch (e) {
        res.status(404).send()
    }
}
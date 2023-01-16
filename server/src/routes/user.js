import express from 'express'
import { createUser, loginUser, logoutUser, logoutUserAll, accountDetail, updateAccount, deleteAccount, deleteProfilePhoto, uploadProfilePhoto, profileUploadError, getProfilePhoto } from '../controller/user.js'
import {auth} from '../middleware/auth.js'
import multer from 'multer'

const upload = multer({
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(jpeg|png|jpg)$/))
        {
            return cb(new Error('Please upload png/jpg/jpeg image'))
        }
        cb(undefined, true)
    }
})

const userRouter = express.Router()

userRouter.post('/', createUser)
userRouter.post('/login', loginUser)
userRouter.post('/logout', auth, logoutUser)
userRouter.post('/logoutAll', auth, logoutUserAll)
userRouter.get('/me', auth, accountDetail)
userRouter.patch('/me', auth, updateAccount)
userRouter.delete('/me', auth, deleteAccount)
userRouter.post('/me/avatar', auth, upload.single('avatar'), uploadProfilePhoto, profileUploadError)
userRouter.delete('/me/avatar', auth, deleteProfilePhoto)
userRouter.get('/:id/avatar', getProfilePhoto)

export default userRouter
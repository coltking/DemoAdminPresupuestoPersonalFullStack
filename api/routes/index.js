const {Router} = require('express')
const router = Router()
const userRouter = require('./user.js')
const checkRouter = require('./check.js')
router.use('/user', userRouter)
router.use('/check', checkRouter)
module.exports = router;

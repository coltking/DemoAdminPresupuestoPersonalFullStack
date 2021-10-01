const {Router} = require('express')
const router = Router()
const userRouter = require('./user.js')
const checkRouter = require('./check.js')
const userExtractor = require('../Middleware/userExtractor.js')
router.use(userExtractor)
router.use('/user', userRouter)
router.use('/check', checkRouter)
module.exports = router;

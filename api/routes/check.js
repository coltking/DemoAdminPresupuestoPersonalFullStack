const router = require('express').Router();
const {
  Checks
} = require('../db');
const isAuthenticated = (req, res, next) => {
  if (req.user) {
    next()
  } else {
    res.status(401).send("User is not authenticated")
  }
}
router.get('/', isAuthenticated, async (req, res, next) => {
  const checks = await Checks.findAll({
    where: {
      idUser: req.user.idUser
    }
  })
  const total = await Checks.sum('entry', { where: { idUser: req.user.idUser } })
  res.send({ checks, balance: total })
})
router.post('/', isAuthenticated, async (req, res, next) => {
  await Checks.create({
    idUser: req.user.idUser,
    entry: req.body.entry,
    concepto: req.body.concepto
  })
})
router.delete('/:idCheck', isAuthenticated, async (req, res, next) => {
  const deleted = await Checks.destroy({ where: { idChecks: req.params.idCheck } })
  console.log("deleted: ", deleted)
  if (deleted) { res.sendStatus(200) }
})
router.put('/:idCheck', isAuthenticated, async (req, res, next) => {
  const updated = await Checks.update({
    concepto: req.body.concepto,
    entry: req.body.entry
  }, {
    where: {
      idChecks: req.params.idCheck
    }
  })
  res.send(updated)
})
module.exports = router;

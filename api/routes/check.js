const router = require('express').Router();
const {
  User, Checks
} = require('../db');

router.post('/:idUser', (req, res, next) => {
  Checks.create({
    idUser: req.params.idUser,
    entry: req.body.entry,
    concepto: req.body.concepto
  })
})
router.delete('/:idCheck', async (req, res, next) => {
  Checks.destroy({ where: { idChecks: req.params.idCheck } }).then(deleted => {
    res.sendStatus(200)
  }).catch(error => {
    console.log(error);
  })
})
router.put('/:idCheck', (req, res, next) => {
  Checks.update({
    concepto: req.body.concepto,
    entry: req.body.entry
  }, {
    where: {
      idChecks: req.params.idCheck
    }
  }).then(update => {
    res.send(update)
  }).catch(error => {
    console.log("put: '/check/idCheck: ",error);
  })
})
module.exports = router;
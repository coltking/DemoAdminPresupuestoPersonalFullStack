const router = require('express').Router();
const {
  User, Checks
} = require('../db');

router.get('/:idUser', (req, res, next) => {
  Checks.findAll({ where: { idUser: req.params.idUser }, limit: 10 })
    .then(checks => {
      User.findOne({ where: { idUser: req.params.idUser } })
        .then(user => {
          Checks.sum('entry', {where: {idUser: req.params.idUser}}).then(total => {
            res.send({ balance: total, name: user.name, checks })
          })
        })
    }).catch(error => { console.log(error) })
})
router.get('/', function (req, res, next) {
  User.findAll().then(users => {
    res.send(users)
  })
});
router.post('/', (req, res, next) => {
  console.log(req.body);
  User.create({
    name: req.body.name
  }).then(user => {
    res.send("usuario " + user.name + " creado")
  })
})

module.exports = router;

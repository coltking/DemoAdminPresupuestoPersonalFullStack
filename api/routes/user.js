const router = require('express').Router();
const { Sequelize } = require('sequelize');
const {
  User, Checks
} = require('../db');

router.get('/:idUser', (req, res, next) => {
  User.findOne({
    where: {
      idUser: req.params.idUser
    },
    include: [{
      model: Checks,
      as: "checks"
    }]
  }).then(result => {
    Checks.sum('entry', { where: { idUser: req.params.idUser } }).then(entry => {
      res.send({ user: result, balance: entry })
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

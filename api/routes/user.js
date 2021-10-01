//No hago uso de bcrypt ya que no es necesario.
//no utilice contraseñas reales en esta aplicacion.
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const {
  User, Checks
} = require('../db');
router.post('/login', async (req, res, next) => {
  const { email, password } = req.body
  const user = await User.findOne({
    where: {
      email: email
    }
  })
  if (user.password) {
    console.log(user);
    if (user.password === password) {
      const token = jwt.sign(user.toJSON(), process.env.SECRET)
      res.send({
        token,
        user: {
          email: user.email, name: user.name
        }
      })
    } else {
      res.status(401).send("Invalid credentials")
    }
  } else {
    res.status(401).send("Invalid Credentials")
  }
})
router.post('/register', async (req, res, next) => {
  try {

    await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    console.log(result);
  } catch (error) {
      if (error.errors[0].message === "email must be unique") {
        res.status(401).send("El email ya se encuentra registrado.")
      }
  }
})
module.exports = router;

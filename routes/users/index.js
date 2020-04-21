/* eslint-disable no-underscore-dangle */
const router = require('express').Router();

const users = require('../../data/users.json');

router.get('/', (req, res) => {
  res.send(users);
});

const findUser = (req, res, next) => {
  const user = users.find((item) => item._id === req.params.id);
  if (user) {
    res.send(user);
  } else {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
    return;
  }

  next();
};

router.get('/:id', findUser);

module.exports = router;

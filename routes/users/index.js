/* eslint-disable no-underscore-dangle */
const router = require('express').Router();

const users = require('../../data/users.json');

router.get('/', (req, res) => {
  res.send(users);
});

const findUser = (req, res) => {
  const user = users.find((item) => item._id === req.params.id);
  if (user) {
    return res.send(user);
  }
  return res.status(404).send({ message: 'Нет пользователя с таким id' });
};

router.get('/:id', findUser);

module.exports = router;

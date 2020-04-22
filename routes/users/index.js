/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
/* eslint-disable no-underscore-dangle */
const router = require('express').Router();

const users = require('../../data/users.json');

router.get('/', (req, res) => {
  return res.status(200).send(users);
});

const findUser = (req, res, next) => {
  const user = users.find((item) => item._id === req.params.id);
  if (user) {
    return res.status(200).send(user);
  // eslint-disable-next-line no-else-return
  } else if (!user) {
    return res.status(404).send({ message: 'Нет пользователя с таким id' });
  }

  next();
};

router.get('/:id', findUser);

module.exports = router;

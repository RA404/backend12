/* eslint-disable arrow-body-style */
const router = require('express').Router();

const cards = require('../../data/cards.json');

router.get('/', (req, res) => {
  return res.status(200).send(cards);
});


module.exports = router;

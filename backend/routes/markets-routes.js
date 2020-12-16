const express = require('express');
const { check } = require('express-validator');

const marketsControllers = require('../service/markets-service');

const router = express.Router();


router.get('/:pid', marketsControllers.getMarketById);

router.get('/', marketsControllers.getMarkets);

router.post(
  '/',
  [
    check('title')
      .not()
      .isEmpty(),
    check('Products')
  ],
  marketsControllers.createMarket
);

router.delete('/:pid', marketsControllers.deleteMarket);

router.put('/:pid',marketsControllers.updateMarket)


module.exports = router;

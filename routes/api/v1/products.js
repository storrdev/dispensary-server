var express = require('express');
var router = express.Router();

let products = [
  {
    id: 1,
    name: 'Blueberry Kush',
    desc: 'A very blueberry-esk kush, airy, light. Heavy Indica or Sativia probably, not sure which one',
    image: {
      alt: 'Blueberry Kush',
      thumbnail: 'http://lorempixel.com/200/200',
      small: 'http://lorempixel.com/400/400',
      medium: 'http://lorempixel.com/800/800',
      large: 'http://lorempixel.com/1200/1200'
    },
    price: [
      {
        quantity: 1,
        unit: 'gram',
        cost: 12
      },
      {
        quantity: 1,
        unit: 'ounce',
        cost: 225
      }
    ],
    stock: {
      quantity: 100,
      unit: 'kilograms'
    }
  },
  {
    id: 2,
    name: 'Blueberry Kush',
    desc: 'A very blueberry-esk kush, airy, light. Heavy Indica or Sativia probably, not sure which one',
    image: {
      alt: 'Blueberry Kush',
      thumbnail: 'http://lorempixel.com/200/200',
      small: 'http://lorempixel.com/400/400',
      medium: 'http://lorempixel.com/800/800',
      large: 'http://lorempixel.com/1200/1200'
    },
    price: [
      {
        quantity: 1,
        unit: 'gram',
        cost: 12
      },
      {
        quantity: 1,
        unit: 'ounce',
        cost: 225
      }
    ],
    stock: {
      quantity: 100,
      unit: 'kilograms'
    }
  },
  {
    id: 3,
    name: 'Blueberry Kush',
    desc: 'A very blueberry-esk kush, airy, light. Heavy Indica or Sativia probably, not sure which one',
    image: {
      alt: 'Blueberry Kush',
      thumbnail: 'http://lorempixel.com/200/200',
      small: 'http://lorempixel.com/400/400',
      medium: 'http://lorempixel.com/800/800',
      large: 'http://lorempixel.com/1200/1200'
    },
    price: [
      {
        quantity: 1,
        unit: 'gram',
        cost: 12
      },
      {
        quantity: 1,
        unit: 'ounce',
        cost: 225
      }
    ],
    stock: {
      quantity: 100,
      unit: 'kilograms'
    }
  },
  {
    id: 4,
    name: 'Blueberry Kush',
    desc: 'A very blueberry-esk kush, airy, light. Heavy Indica or Sativia probably, not sure which one',
    image: {
      alt: 'Blueberry Kush',
      thumbnail: 'http://lorempixel.com/200/200',
      small: 'http://lorempixel.com/400/400',
      medium: 'http://lorempixel.com/800/800',
      large: 'http://lorempixel.com/1200/1200'
    },
    price: [
      {
        quantity: 1,
        unit: 'gram',
        cost: 12
      },
      {
        quantity: 1,
        unit: 'ounce',
        cost: 225
      }
    ],
    stock: {
      quantity: 100,
      unit: 'kilograms'
    }
  }
];

/* GET products listing. */
router.get('/', function(req, res, next) {
  res.json(products);
});

module.exports = router;

const express = require('express');
const recordRoute = require('./record.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/records',
    route: recordRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

router.get('/', (req, res) => {
  res.send({ msg: 'API is healthy! explore other endpoints as well!' });
});

module.exports = router;

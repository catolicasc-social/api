const { Router } = require('express');
const controller = require('../controllers/usuario');

module.exports = () => {
  const router = new Router();

  router.get('/', controller.list);

  return router;
};

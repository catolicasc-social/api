const { Router } = require("express");
const users = require("../controllers/users");

module.exports = () => {
  const router = new Router();

  router.get('/:id', controller.get);
  router.put("/:id", users.update);
  router.delete('/:id', controller.delete);

  return router;
};
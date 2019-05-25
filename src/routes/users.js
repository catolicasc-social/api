const { Router } = require("express");
const users = require("../controllers/users");

module.exports = () => {
  const router = new Router();

  router.put("/:id", users.update);

  return router;
};
const { Router } = require('express');
const controller = require('../controllers/users');

module.exports = () => {
    const router = new Router();

    router.delete('/:id', controller.delete);


    return router;
};

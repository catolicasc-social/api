const { Router } = require('express');
const controller = require('../controllers/products');

module.exports = () => {
    const router = new Router();

    router.get('/', controller.list);
    router.get('/:id', controller.get);
    router.delete('/:id', controller.delete);


    return router;
};

const { Router } = require('express');

const productsRouter = require('./products');
const usersRouter = require('./users');

module.exports = () => {
    const router = new Router();
    
    router.use('/products', productsRouter());
    router.use('/users', usersRouter());

    return router;
};
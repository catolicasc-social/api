const { Router } = require('express');

const productsRouter = require('./products');

module.exports = () => {
    const router = new Router();
    
    router.use('/products', productsRouter());

    return router;
};
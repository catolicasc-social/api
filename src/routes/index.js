const { Router } = require('express');

const productsRouter = require('./products');
const usuarioRouter = require('./usuario');

module.exports = () => {
    const router = new Router();
    
    router.use('/products', productsRouter());
    router.use('/usuario', usuarioRouter());

    return router;
};

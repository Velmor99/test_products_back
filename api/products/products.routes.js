const {Router} = require('express');
const productController = require('./products.controller');

const useRouter = Router();

//@ GET /api/products
useRouter.get('/', (req, res, next) => {
    res.send("test ok")
})

//@ GET /api/products/all
useRouter.get('/all', productController.getAllProducts)

module.exports = useRouter
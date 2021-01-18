const path = require('path');
const fs = require('fs');
const { promises: fsPromises } = fs;
const productsPath = path.join(__dirname, '../db/products.json');

class ProductsController {
    async getAllProducts(req, res, next) {
        try {
            const data = await fsPromises.readFile(productsPath, 'utf-8')
            const objData = JSON.parse(data)
            return res.send(objData).status(200)
        } catch(err) {
            next(err)
        }
    }
}

module.exports = new ProductsController();
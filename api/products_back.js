const express = require("express");
const path = require("path");
const fs = require("fs")
const PORT = process.env.PORT || 3000
const cors = require("cors")
const productsRouter = require('./products/products.routes');


module.exports = class ProductsAPI {
    constructor() {
        this.server = null
    }

    start() {
        this.initServer();
        this.initMiddlewares();
        this.initRoutes();
        this.startListen();
    }

    initServer() {
        this.server = express()
    }

    initMiddlewares() {
        this.server.use(express.json());
        this.server.use(cors({original: 'http:localhost:3000'}))
    }

    initRoutes() {
        this.server.use('/api/products', productsRouter)
    }

    startListen() {
        this.server.listen(PORT, () => {
            console.log("Server started listening on port", PORT)
        })
    }
}
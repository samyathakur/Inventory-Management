import express from 'express';
import ProductController from './src/controller/product.controller.js';
import path from 'path';

const server = express();

// setup view engine settings, it tells that the type of view engine we use is ejs
server.set('view engine', 'ejs')
// define the path of view/where ejs will find the views
server.set(path.join(path.resolve(),"src",'view'))

// create an instance of ProductController
const productController = new ProductController(); 
server.get('/', (productController.getProducts));
server.use(express.static('src/views'));

server.listen(3400);
console.log('Server is listening on pert 3400')
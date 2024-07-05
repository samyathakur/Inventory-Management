import express from 'express';
import ProductController from './src/controller/product.controller.js';
import path from 'path';
import ejsLayouts from 'express-ejs-layouts';

const server = express();

//Parse form data
server.use(express.urlencoded({extended: true}));

// setup view engine settings, it tells that the type of view engine we use is ejs
server.set('view engine', 'ejs');
// define the path of view/where ejs will find the views
server.set('views', path.join(path.resolve(),"src",'view'));

server.use(ejsLayouts);

// create an instance of ProductController
const productController = new ProductController(); 
server.get('/', (productController.getProducts));

server.get('/new',(productController.getAddForm))
server.post('/', productController.addNewProduct);
server.use(express.static('src/view'));

server.listen(3400);
console.log('Server is listening on pert 3400')
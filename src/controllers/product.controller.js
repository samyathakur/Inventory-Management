import ProductModel from '../models/product.model.js';

class ProductsController {
  getProducts(req, res, next) {
    var products = ProductModel.getAll();
    res.render('index', { products });
  }

  getAddProduct(req, res, next) {
    res.render('new-product', {
      errorMessage: null,
    });
  }

  postAddProduct(req, res, next) {
    const {name, desc, price} = req.body;
    const imageUrl = "images/"+req.file.filename;
    ProductModel.add(name, desc, price, imageUrl);
    var products = ProductModel.getAll();
    res.render('index', { products });
  }

  getUpdateProductView(req, res, next){

    // 1. if product exist return view
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if(productFound){
      res.render('update-product',{product:productFound,errorMessage:null })
    }
    // 2. else return error
    else{
      res.status(401).send("product not found")
    }
  }

  postUpdateProduct(req, res, next){
    ProductModel.update(req.body);
    var products = ProductModel.getAll();
    res.render('index', { products });
  }

  deleteProduct(req, res, next){
    const id = req.params.id;
    const productFound = ProductModel.getById(id);
    if(!productFound){
      return res.status(401).send("product not found")
    }
    ProductModel.delete(id);
    var products = ProductModel.getAll();
    res.render('index', { products });
  }

}

export default ProductsController;

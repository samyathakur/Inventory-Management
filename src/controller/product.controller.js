import path from 'path';
import productModel from '../model/product.model';

export default class ProductController{

    getProducts(req,res){
        let product = productModel.getProduct();
        console.log(product)
        console.log(path.resolve());
        return res.sendFile(path.join(path.resolve(),"src",'view',"products.html" ));
    }
}
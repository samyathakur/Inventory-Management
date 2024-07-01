import path from 'path';
import productModel from '../model/product.model.js';

export default class ProductController{

    getProducts(req,res){
        let product = productModel.getProduct();
        console.log(product)
        console.log(path.resolve());
        //render function takes name of template i.e view file name and data that needs to be passed render(template name, data name)
        res.render('products',{prod: product})
        // return res.sendFile(path.join(path.resolve(),"src",'view',"products.html" ));
    }
}
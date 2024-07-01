export default class productModel{
    constructor(_id, _name, _desc, _price, _imgUrl){
        this.id = _id
        this.name  = _name
        this.desc  = _desc
        this.price  = _price
        this.imageUrl  =  _imgUrl
    }

    static getProduct(){
        return products
    }
}

var products = [
    new productModel(
      1,
      'Product 1',
      'Description for Product 1',
      19.99,
      'https://m.media-amazon.com/images/I/51-nXsSRfZL._SX328_BO1,204,203,200_.jpg',
    ),
    new productModel(
      2,
      'Product 2',
      'Description for Product 2',
      29.99,
      'https://m.media-amazon.com/images/I/51xwGSNX-EL._SX356_BO1,204,203,200_.jpg',
    ),
    new productModel(
      3,
      'Product 3',
      'Description for Product 3',
      39.99,
      'https://m.media-amazon.com/images/I/31PBdo581fL._SX317_BO1,204,203,200_.jpg',
    ),
  ]


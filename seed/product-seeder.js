var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('localhost:27017/shopping');
// var pro= new Product() so by doing this we store 1 product of SCHEMA "Product" in variable pro....but here we have 
//done the same thing in array so that we can use loop.
var products = [
    new Product({
        imagePath: 'https://rukminim1.flixcart.com/image/352/352/j65cnm80/flour/z/s/r/1-superior-mp-atta-whole-wheat-flour-aashirvaad-original-imaewzbkfqhy4dhq.jpeg?q=70',
        title: 'Fresh Chakki aata',
        description: '1kg aata',
        price: 32
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61ZhyN3P4tL._SX425_.jpg',
        title: 'Maida',
        description: '1kg maida',
        price: 30
    }),
    new Product({
        imagePath: 'https://cdn.grofers.com/app/images/products/full_screen/pro_52.jpg',
        title: 'Soyabean oil',
        description: '1L soyabean oil',
        price: 45
    }),
    new Product({
        imagePath: 'https://images-na.ssl-images-amazon.com/images/I/61SacrIvdEL._SL1000_.jpg',
        title: 'Salt',
        description: '1kg tata salt',
        price: 18
    })

];
//array of product name is products
var done = 0;
//looping is done over all products but as we know that node is a-synchronous so when we save a particular product 
//in database named shopping ...but till it is getting saved ....till then it may disconnect the sercer so when 
//our counter become equal to the length of items then only disconnect elese never disconnect.
for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done == products.length)
            exit();
    });
}
function exit() {
    mongoose.disconnect();
}
var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping',{useMongoClient: true,});
// var pro= new Product() so by doing this we store 1 product of SCHEMA "Product" in variable pro....but here we have 
//done the same thing in array so that we can use loop.
var products = [
    new Product({
        imagePath: 'https://www.facebook.com/ChennaiBankAuctionProperties/?ref=py_c',
        title: 'Chennai Bank Auction',
        description: 'Auction Property in Chennai',
        price: 1000000
    }),
    new Product({
        imagePath: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepressjournal.in%2Fmumbai%2Fbmc-to-auction-properties-to-recover-property-tax-dues&psig=AOvVaw0IhxtSO0K0LjN95CRPWFhq&ust=1590996033623000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNj31cP-3OkCFQAAAAAdAAAAABAJ',
        title: 'BMC Auction Property',
        description: 'BMC to auction properties to recover property tax dues',
        price: 5000000
    }),
    new Product({
        imagePath: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.economictimes.com%2Fnews%2Fpolitics-and-nation%2Fgovernment-plans-to-auction-enemy-properties-worth-rs-1-lakh-crore%2Farticleshow%2F62494325.cms&psig=AOvVaw0IhxtSO0K0LjN95CRPWFhq&ust=1590996033623000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNj31cP-3OkCFQAAAAAdAAAAABAQ',
        title: 'Enemy property auction',
        description: 'Government plans to auction enemy properties worth Rs 1 lakh crore',
        price: 100000000000
    }),
    new Product({
        imagePath: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.zeebiz.com%2Findia%2Fnews-buy-your-dream-house-sbi-mega-e-auction-nears-over-1000-residential-commercial-properties-on-offer-all-details-here-86857&psig=AOvVaw0IhxtSO0K0LjN95CRPWFhq&ust=1590996033623000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNj31cP-3OkCFQAAAAAdAAAAABAW',
        title: 'Buy your dream house',
        description: 'Buy your dream house! SBI Mega E-Auction nears, over 1000 residential, commercial properties on offer - all details here',
        price: 70000000
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
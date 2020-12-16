var moongoose = require('mongoose');
var config = require('../config/config').config;
const HttpError = require('../models/http-error');
const marketData = require('./data');
const products = require('./products')
var dbName = config.DB;
var url = "mongodb://"+config.HOST+":"+config.PORT+"/" ;
moongoose.connect(url + dbName,
{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true,useFindAndModify: false} )
       
moongoose.connection.on('open', function (ref) {
            console.log('Connected to mongo server.');
            moongoose.connection.db.listCollections().toArray(function (err, names) {
                if(names.length <= 1){
                    try {
                         marketData.ZaatarWBhar.save(); 
                         marketData.AbouWadih.save();
                         marketData.Falafelna.save();
                         marketData.BurgerQueen.save();
                         marketData.Mashawi.save();
                         marketData.Homemade.save();
                         marketData.NewUser.save();
                        products.product1.save();
                        products.product2.save();
                        products.product3.save();
                        products.product4.save();
                        products.product5.save();
                        products.product6.save();
                        products.product7.save();
                        products.product8.save();
                        products.product9.save();
                        products.product10.save();
                        products.product11.save();
                        products.product12.save();
                        products.product13.save();
                        products.product14.save();
                        products.product15.save();
                        products.product16.save();
                        products.product17.save();

                        products.product18.save();
                        products.product19.save();
                        setTimeout(()=>{
                          marketData.reservation1.save();
                          marketData.reservation2.save();
                          marketData.reservation3.save();
                          marketData.reservation4.save();
                          marketData.reservation5.save();
                          marketData.reservation6.save();
                          marketData.reservation7.save();
                          marketData.reservation8.save();
                          marketData.reservation9.save();
                          marketData.reservation10.save();
                        },3300)
                       
                      } catch (err) {
                        const error = new HttpError(
                          'Creating place failed, please try again.',
                          500
                        );
                        return next(error);
                    }
                }
                module.exports.Collection = names;
            });
        })


 
  
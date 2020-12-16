const HttpError = require('../models/http-error');
const Products = require('../models/myproducts');

const getProducts = async (req, res, next) => {
    let products;
    try {
        products = await Products.find({});
    } catch(err){
        const error = new HttpError("Something went wrong",500);
    }

    res.json({Product: products.map( product => product.toObject({getters:true}))})
}
const addProducts = async (req, res, next) => {
  const { ProductName, ProductImage,ProductPrice,ProductDiscountedPrice,ProductExpiryDate } = req.body;
  const createdProduct = new Products({
    ProductName,
    ProductImage,
    ProductPrice,
    ProductDiscountedPrice,
    ProductExpiryDate
  });

  try {
    await createdProduct.save(); 
  } catch (err) {
    const error = new HttpError(
      'Creating Product failed, please try again.',
      500
    );
    return next(error);
  }

  res.status(201).json({ product: createdProduct });  
}
const getProductsById =  async (req, res, next) => {
    const productId = req.params.pid;
    let products;
    try {
      products = await Products.findById({productId});
    } catch(err){
        const error = new HttpError("Something went wrong",500);
        return next(error);
    }
res.json({product: product.toObject()});
}

const updateProduct =  async (req, res, next) =>{
    const productId = req.params.id;
    let product;
    try {
       product = await Products.findById(productId);
    } catch(err){
        const error = new HttpError("Something went wrong",500);
        return next(error);
    }
   
    if (product) {
        product.ProductName = req.body.ProductName ||product.ProductName;
        product.ProductImage = req.body.ProductImage || product.ProductImage;
        product.ProductPrice = req.body.ProductPrice || product.ProductPrice;
        product.ProductDiscountedPrice = req.body.ProductDiscountedPrice ||product.ProductDiscountedPrice;
        product.ProductExpiryDate = req.body.ProductExpiryDate ||product.ProductExpiryDate ;
      const UpdatedProduct = await product.save();
      res.send({
        _id: UpdatedProduct.id,
        ProductName: UpdatedProduct.name,
        ProductImage: UpdatedProduct.email,
        ProductPrice: UpdatedProduct.password,
        ProductDiscountedPrice: UpdatedProduct.ProductDiscountedPrice,
        ProductExpiryDate: UpdatedProduct.ProductExpiryDate
      });
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
}
const deleteProduct =  async (req, res, next) => {
    let product;
    const productId = req.params.pid;
    try {
        product = await Products.findById(productId);
    } catch(err) {
        const error = new HttpError(
            'Something Went Wrong',500);
            return next(error);
    }
   if(!products){
    const error = new HttpError(
        'Something Went Wrong',500);
        return next(error)
   }
    try{
        await product.remove();
    }catch(err){
        const error = new HttpError(
            'Something Went Wrong',500);
            return next(error);
    }
    res.status(200).json({message: 'Product Deleted.'});
    
}
exports.getProducts = getProducts;
exports.addProducts = addProducts;
exports.getProductsById = getProductsById;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;

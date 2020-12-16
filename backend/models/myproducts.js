var mongoose = require('mongoose');

const prodctSchema = new mongoose.Schema({
  ProductName: {
    type: String,
    maxlength: 50
},
ProductImage: {
    type: String,
    default: null
},
ProductPrice: {
    type: String,
    default: null
},
ProductDiscountedPrice: {
    type: Number,
    default: null
},
ProductExpiryDate: {
    type: String,
    default: null
}
})



module.exports = mongoose.model('Product', prodctSchema);

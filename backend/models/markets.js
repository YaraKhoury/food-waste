var mongoose = require('mongoose');

const productsSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    discountedPrice: { type: Number, default: 0 },
    expiryDate: { type: String, required: true },
    productImg: {type: String, required: true}
  }
);
const marketSchema = new mongoose.Schema({
  title: {
    type: String,
    maxlength: 50
},
images: {
    type: String,
    default: null
},
Products: [productsSchema]
}, { timestamps: true })



module.exports = mongoose.model('Market', marketSchema);

const express = require('express');
const productService = require('../service/product-service');
const router = express.Router();

router.get('/', productService.getProducts);
router.post('/', productService.addProducts);
router.delete('/:pid', productService.deleteProduct);
 router.get('/pid',productService.getProductsById);
 router.put('/pid',productService.updateProduct);


module.exports = router;
const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getOneProduct,
  getProductsByCategory,
  createProduct,
  deleteProduct,
  updateProduct,
} = require('../controllers/productsController')

router.get('/', getAllProducts)
router.get('/category/:category_id', getProductsByCategory)
router.get('/:id', getOneProduct)
router.post('/', createProduct)
router.delete('/:id', deleteProduct)
router.put('/:id', updateProduct)

module.exports = router
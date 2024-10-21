const express = require("express");
const router = express.Router();

const {deleteproduct, Find_storemanager_product, findAllproduct, FindProduct, saveproducts, Update_Product} = require("../controller/productController");



router.delete("/deleteproduct/productID/:productID",  deleteproduct);

router.get("/findstoreproduct/stockmanagerid/:stockmanagerid",  Find_storemanager_product);

router.get("/findAllproduct",  findAllproduct);

router.get("/FindProduct/ProductID/:ProductID",  FindProduct);

router.post("/saveproducts",  saveproducts);

router.put("/updateproduct/productid/:productid",  Update_Product);

module.exports = router;
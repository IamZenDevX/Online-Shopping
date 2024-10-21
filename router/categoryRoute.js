const express = require("express");
const router = express.Router();

const {delete_Category, findCategory, SaveCategory, Update_Category} = require("../controller/categoryController");



router.delete("/delete/Category_ID/:Category_ID",  delete_Category);

router.get("/findCategory/categoryID/:categoryID",  findCategory);

router.post("/SaveCategory",  SaveCategory);

router.put("/update/Category_ID/:Category_ID",  Update_Category);

module.exports = router;
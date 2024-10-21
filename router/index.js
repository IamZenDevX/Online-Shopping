const express = require("express");
const router = express.Router();

const cartRoute = require("./cartRoute");
const categoryRoute = require("./categoryRoute");
const commentsRoute = require("./commentsRoute");
const productRoute = require("./productRoute");
const StoreManagerRoute = require("./StoreManagerRoute");
const userRoute = require("./userRoute");

router.use("/cart", cartRoute);
router.use("/category", categoryRoute);
router.use("/comments", commentsRoute);
router.use("/product", productRoute);
router.use("/StoreManager", StoreManagerRoute);
router.use("/users", userRoute);

module.exports = router;

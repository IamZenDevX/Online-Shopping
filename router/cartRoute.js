const express = require("express");
const router = express.Router();

const {deletewatchlist, findAll_orderdetails_user, findwatchlist, Update_WatchList_Items} = require("../controller/cartController");



router.delete("/deletewatchlist/id/:id",  deletewatchlist);

router.get("/findallorderdetailsuser/fullname/:fullname",  findAll_orderdetails_user);

router.get("/findwatchlist/userID/:userID",  findwatchlist);

router.put("/updatewatchlistitems/productID/:productID",  Update_WatchList_Items);

module.exports = router;
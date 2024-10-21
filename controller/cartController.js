const watchlist = require('../models/watchlistModel');
const cart = require('../models/cartModel');
const product = require('../models/productModel');


exports.deletewatchlist = async(req, res, next) => {
const {id} = req.params;
const deletedwatchlist = await watchlist.findByIdAndDelete(id);
console.log("Successfully Deleted !!");



}

exports.findAll_orderdetails_user = async(req, res, next) => {
const {fullname} = req.params;
let Find_All_OrderDetails_User;
 Find_All_OrderDetails_User = await cart.findById(fullname,'Quntity Product_ID Price User_ID ');
res.json(Find_All_OrderDetails_User);




}


exports.findwatchlist = async(req, res, next) => {
const {userID} = req.params;
let findwatchlist;
 findwatchlist = await watchlist.findById(userID,'name image productID counter discount price avaliable userID ');
res.json(findwatchlist);



}

exports.Update_WatchList_Items = async(req, res, next) => {
const {productID} = req.params;
let Update_WatchList_Items;
 Update_WatchList_Items = await product.findById(productID,'quantity ');
res.json(Update_WatchList_Items);
}





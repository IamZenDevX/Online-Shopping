const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema(
{
userID: {
type: mongoose.Schema.Types.ObjectId, 
ref: "Ref.: user",
},
counter: {
type: Number, 
},
avaliable: {
type: Number, 
},
productID: {
type: mongoose.Schema.Types.ObjectId, 
ref: "Ref.: product",
},
price: {
type: Number, 
},
name: {
type: String, 
},
image: {
type: String, 
},
discount: {
type: Number, 
},
},
);





module.exports = mongoose.model("watchlist", watchlistSchema);

const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
{
Product_ID: {
type: mongoose.Schema.Types.ObjectId, 
ref: "Ref.: product",
},
User_ID: {
type: mongoose.Schema.Types.ObjectId, 
ref: "Ref.: user",
},
Quntity: {
type: String, 
},
Price: {
type: String, 
},
},
);





module.exports = mongoose.model("cart", cartSchema);

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
description: {
type: String, 
required: true, 
},
maincategory: {
type: String, 
required: true, 
},
subcategory: {
type: String, 
},
price: {
type: Number, 
required: true, 
},
stockmanagerid: {
type: mongoose.Schema.Types.ObjectId, 
ref: "Ref.: storemanager",
},
quantity: {
type: Number, 
required: true, 
},
image: {
type: String, 
},
},
);





module.exports = mongoose.model("product", productSchema);

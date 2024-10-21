const mongoose = require("mongoose");

const placeorderSchema = new mongoose.Schema(
{
fullname: {
type: String, 
},
email: {
type: String, 
},
address: {
type: String, 
},
state: {
type: String, 
},
postalCode: {
type: String, 
},
contactNo: {
type: String, 
},
TrackingNum: {
type: String, 
},
TotalCost: {
type: String, 
},
deliverHome: {
type: String, 
},
cardNumber: {
type: String, 
},
cvv: {
type: String, 
},
expireDate: {
type: String, 
},
},
);





module.exports = mongoose.model("placeorder", placeorderSchema);

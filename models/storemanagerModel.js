const mongoose = require("mongoose");

const storemanagerSchema = new mongoose.Schema(
{
username: {
type: String, 
},
email: {
type: String, 
},
Password: {
type: String, 
},
RePassword: {
type: String, 
},
Admin: {
type: mongoose.Schema.Types.ObjectId, 
ref: "Ref.: user",
},
},
);





module.exports = mongoose.model("storemanager", storemanagerSchema);

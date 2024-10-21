const mongoose = require("mongoose");

const commentsSchema = new mongoose.Schema(
{
username: {
type: String, 
},
productId: {
type: mongoose.Schema.Types.ObjectId, 
ref: "Ref.: product",
},
Comment: {
type: String, 
},
rate: {
type: Number, 
},
},
);





module.exports = mongoose.model("comments", commentsSchema);

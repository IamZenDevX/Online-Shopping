const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
{
CategoryName: {
type: String, 
},
MainCategory: {
type: String, 
},
Admin: {
type: String, 
},
},
);





module.exports = mongoose.model("category", categorySchema);

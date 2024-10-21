const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema(
{
username: {
type: String, 
required: true, 
},
email: {
type: String, 
required: true, 
},
password: {
type: String, 
select: false, 
required: true, 
},
contactno: {
type: Number, 
required: true, 
},
gender: {
type: String, 
required: true, 
},
},
);


userSchema.pre("save", async function (next) {
this.password = await bcrypt.hash(this.password, 10);
});



module.exports = mongoose.model("user", userSchema);

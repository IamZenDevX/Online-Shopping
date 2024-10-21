const storemanager = require('../models/storemanagerModel');


exports.delete_StoreManger = async(req, res, next) => {
const {SMID} = req.params;
const deletedstoremanager = await storemanager.findByIdAndDelete(SMID);
console.log("SuccessFully Deleted !");



}

exports.findstoremanager = async(req, res, next) => {
const {smid} = req.params;
let find_storemanager;
 find_storemanager = await storemanager.findById(smid,'Password Admin email username RePassword ');
res.json(find_storemanager);



}

exports.savestoremanager = async(req, res, next) => {
const {Admin, email, Password, RePassword, username} = req.body;
let createdstoremanager;
createdstoremanager = new storemanager({
RePassword, 
email, 
Password, 
Admin, 
username, 
});
await createdstoremanager.save();
res.json(createdstoremanager);



}

exports.Update_StoreManger = async(req, res, next) => {
const {Admin, email, Password, RePassword, username} = req.body;
const {SMID} = req.params;
const updatedstoremanager = await storemanager.findByIdAndUpdate(SMID,
{
Admin: Admin,
RePassword: RePassword,
Password: Password,
email: email,
username: username
}
, {new: true} );
res.json(updatedstoremanager);



}





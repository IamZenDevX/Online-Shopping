const ErrorHandler = require('../utils/default/errorHandler');
const comments = require('../models/commentsModel');


exports.deletecomments = async(req, res, next) => {
const {id} = req.params;
const deletedcomments = await comments.findByIdAndDelete(id);
console.log("Deleted Successfully!");
res.send("Deleted Successfully!");



}

exports.findAllComments = async(req, res, next) => {
let findAllrecords;
 findAllrecords = await comments.find({ },'rate productId username Comment ');
res.json(findAllrecords);



}

exports.FIndCommentByProductID = async(req, res, next) => {
const {productId} = req.params;
let Find_CommentsByProducts;
 Find_CommentsByProducts = await comments.findOne(
{
productId
},'productId username Comment rate ');
res.json(Find_CommentsByProducts);



}

exports.SaveComment = async(req, res, next) => {
const {Comment, productId, rate, username} = req.body;
let createdcomments;
try {
createdcomments = await comments.create({
productId, 
rate, 
username, 
Comment, 
});
} catch (err) {
const error = new ErrorHandler(
'Comment is Not Added, please try again .',
401
);
return next(error);
}
res.json(createdcomments);



}

exports.updateComments = async(req, res, next) => {
const {Comment, rate} = req.body;
const {Id} = req.params;
try {
const updatedcomments = await comments.findByIdAndUpdate(Id,
{
Comment: Comment,
rate: rate
}
, {new: true} );
} catch (err) {
const error = new ErrorHandler(
'Comment Is Not Updated !',
400
);
return next(error);
}
res.json(updatedcomments);



}





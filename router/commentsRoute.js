const express = require("express");
const router = express.Router();

const {deletecomments, findAllComments, FIndCommentByProductID, SaveComment, updateComments} = require("../controller/commentsController");



router.delete("/deletecomments/id/:id",  deletecomments);

router.get("/findAllComments",  findAllComments);

router.get("/findcomment/productId/:productId",  FIndCommentByProductID);

router.post("/savecomment",  SaveComment);

router.put("/updateComments/Id/:Id",  updateComments);

module.exports = router;
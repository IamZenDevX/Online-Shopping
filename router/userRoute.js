const express = require("express");
const router = express.Router();

const {AddUser, Delete_User, Find_All_Users, Find_User, Login, updateuser} = require("../controller/userController");



router.post("/add",  AddUser);

router.delete("/delete/userid/:userid",  Delete_User);

router.get("/find",  Find_All_Users);

router.get("/finds/userid/:userid",  Find_User);

router.post("/login",  Login);

router.put("/update/userid/:userid",  updateuser);

module.exports = router;
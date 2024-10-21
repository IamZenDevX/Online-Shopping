const express = require("express");
const router = express.Router();

const {delete_StoreManger, findstoremanager, savestoremanager, Update_StoreManger} = require("../controller/StoreManagerController");



router.delete("/deleteStoreManger/SMID/:SMID",  delete_StoreManger);

router.get("/findstoremanager/smid/:smid",  findstoremanager);

router.post("/savestore",  savestoremanager);

router.put("/UpdateSM/SMID/:SMID",  Update_StoreManger);

module.exports = router;
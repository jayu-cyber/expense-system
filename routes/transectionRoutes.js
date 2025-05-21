const express = require("express");
const {
  addTransection,
  getALLTransection,
  editTransection,
  deleteTransection,
} = require("../controller/transectioCtrl");

const router = express.Router();

//add transection post method
router.post("/add-transection", addTransection);
//edit treansaction
router.post("/edit-transection", editTransection);
//delete transaction
router.post("/delete-transection", deleteTransection);

//get transection
router.post("/get-transection", getALLTransection);
module.exports = router;

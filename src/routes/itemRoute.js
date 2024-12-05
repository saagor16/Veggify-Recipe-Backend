const express = require('express');
const route =express.Router();

const ItemController = require("../controllers/itemController")




route.get('/all-items', ItemController.getAllItem)




//https://demo-vegi-backend.vercel.app/api/all-items

module.exports=route;
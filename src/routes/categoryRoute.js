const express = require('express');
const route =express.Router();
const CategoryController = require('../controllers/categoryController')

route.get('/categories/:category', CategoryController.getCategory)


model.exports = route;
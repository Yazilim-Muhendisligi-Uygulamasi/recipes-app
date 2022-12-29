const mongoose = require("mongoose");

const Food = mongoose.model(
  "Food",
  new mongoose.Schema({
    foodName: String,
    ingredientsFfood: String,
    recipe: String,
    foodImgUrl: String,
  })
);

module.exports = Food;
const db = require("../models");
const Food=db.food;

exports.addFood = (req, res) => {
    const food = new Food({
        foodName: req.body.foodName,
        ingredientsFfood: req.body.ingredientsFfood,
        recipe: req.body.recipe,
        foodImgUrl: req.body.foodImgUrl
    });
  
    food.save((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
    });
}
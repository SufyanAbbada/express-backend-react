var express = require("express");
const { Product } = require("../models/product");
var router = express.Router();

/* GET home page. */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

router.get("/cart/:id", async function (req, res, next) {
  let prodadd = await Product.findById(req.params.id);
  let cart = [];
  if (req.cookies.cart) {
    cart = req.cookies.cart;
  }
  cart.push(prodadd);
  res.cookie("cart", cart);
});

router.get("/cart/remove/:id", async function (req, res, next) {
  let cart = [];
  if (req.cookies.cart) {
    cart = req.cookies.cart;
  }
  cart.splice(
    cart.findIndex((c) => c._id == req.params.id),
    1
  );
  res.cookie("cart", cart);
});

router.get("/cart", function (req, res, next) {
  let cartitems = req.cookies.cart;
  if (!cartitems) cartitems = [];
  console.log(req.cookies.cart);
  //res.render("scart", { cartitems });
});

module.exports = router;

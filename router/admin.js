let express = require("express");
let router =  express.Router();
router.get("/",function (req,res,next) {
    res.render("admin/main_index");

});
router.get("/user",function (req,res,next) {
    res.render("admin/user_index")
});
router.get("/main",function (req,res,next) {
    res.render("admin/main_index")
});
router.get("/class",function (req,res,next) {
    res.render("admin/class_index")
});
router.get("/goods",function (req,res,next) {
    res.render("admin/goods_index")
});
router.get("/order",function (req,res,next) {
    res.render("admin/order_index")
});

module.exports = router;
const express = require('express');
const authorization = require('../Middleware/authorization');
const router = express.Router();
const Products = require("../Model/Products");
const {postProduct,deletedProduct,updateProduct,getProduct}=require("../Controller/productController");



router.post('/', authorization, postProduct);

router.put('/:id',authorization,updateProduct);

router.delete('/:id',authorization,deletedProduct);

router.get("/",authorization,getProduct);

// router.post('/', authorization, async (req, res) => {

//     const { chips, chocolate, drink } = req.body;

//     const userProduct=await Products.findOne({userid:req.userId});
//     if(!userProduct){
//     const productList = await Products.create({
//         chips,
//         chocolate,
//         drink,
//         userid: req.userId
//     });
//     res.json({productList,"msg":"items added successfully"});
//     console.log(req.userId);
// }

//     else{
//         userProduct.chips=chips;
//         userProduct.chocolate=chocolate;
//         userProduct.drink=drink;
//        await userProduct.save();
//        res.send(userProduct);

//     }


// });


module.exports = router;
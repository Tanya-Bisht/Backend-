const Products=require("../Model/Products");

const postProduct=async(req,res)=>{
    const { chips, chocolate, drink } = req.body;

    const productList = await Products.create({
        chips,
        chocolate,
        drink,
        userid: req.userId
    });
    res.json({productList,"msg":"items added successfully"});
    console.log(req.userId);
    

}
const deletedProduct=async(req,res)=>{
    const id =req.params.id;
    try{
        const deletedProduct=await Products.findByIdAndRemove(id);
        res.status(200).json(deletedProduct);

    }
    catch(err){
        res.status(404).json({message:"Something went wrong"});
    }
}


const updateProduct=async(req,res)=>{
    const id=req.params.id;
    const { chips, chocolate, drink } = req.body;
    const newProduct={
        chips,
        chocolate,
        drink,
        userid:req.userId
    }
    await Products.findByIdAndUpdate(id,newProduct,{new:true});
    res.send(newProduct);
}

const getProduct=async(req,res)=>{
    const productList=await Products.findOne({userid:req.userId});
    res.send(productList);


}


module.exports={postProduct,deletedProduct,updateProduct,getProduct};
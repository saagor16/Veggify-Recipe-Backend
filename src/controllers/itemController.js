const Item = require("../model/ItemModel")

const getAllItem = async (req,res) =>{
    const result = await Item.find().sort({createAt:-1});
    res.status(200).json(result)
}

const getSearchedItems = async (req,res) =>{
    const {q}=req.query;
    try{
        let items ;
        if(q){
            items=await Item.find({name:{$regex:q, $option :'i'}})
        }
        res.status(200).json(items)
    } catch(error){
        res.status(500).json({message:"no iTem found !"})
    }
}


module.exports={
    getAllItem,
    getSearchedItems
}
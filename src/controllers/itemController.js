const Item = require("../model/ItemModel")

const getAllItem = async (req,res) =>{
    const result = await Item.find().sort({createAt:-1});
    res.status(200).json(result)

}

module.exports={
    getAllItem
}
import connectDb from "../../middleware/mongoose"
import friend from "../../models/friend";
import user from "../../models/user"



const handler = async (req,res)=> {
    
    let friends = await friend.find({email:req.body.email});
    res.status(200).json({friends})
}
export default connectDb(handler);
  
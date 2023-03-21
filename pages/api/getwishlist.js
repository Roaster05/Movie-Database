import connectDb from "../../middleware/mongoose"
import user from "../../models/user"


const handler = async (req,res)=> {
    
    let movies = await user.find({email:req.body.email});
    res.status(200).json({movies})
}
export default connectDb(handler);
  
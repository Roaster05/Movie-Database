import connectDb from "../../middleware/mongoose"
import friend from "../../models/friend"
import user from "../../models/user"



const handler = async (req,res)=> {
    if(req.method == 'POST')
    {
        let p = new friend({
            email:req.body.email,
            friendemail:req.body.friendemail



        })
        await p.save()
        console.log("successfully added");
    
    res.status(200).json({success: "success"})
}
else
{
    res.status(400).json({ error: "This method is not allowed"})
}
}
export default connectDb(handler);
  
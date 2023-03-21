const mongoose =require("mongoose");

const FriendSchema = new mongoose.Schema({
    email: { type:String , required:true},
    friendemail : { type:String , required:true}
},{timestamp:true});
mongoose.models={}
export default mongoose.model("friend",FriendSchema);
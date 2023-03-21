const mongoose =require("mongoose");

const UserSchema = new mongoose.Schema({
    email: { type:String , required:true},
    movieid : { type:String , required:true}
},{timestamp:true});
mongoose.models={}
export default mongoose.model("user",UserSchema);
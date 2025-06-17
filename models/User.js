import mongoose from "mongoose";
import { unique } from "next/dist/build/utils";

const userScheme = new mongoose.Schema({
    _id : {type : String , required : true},
    name : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    imageUrl : {type : String, required : true},
    cartItems : {type : object , default : {}}
},{minimize : false})

const User = mongoose.model.user || mongoose.model("User" , userScheme)

export default User
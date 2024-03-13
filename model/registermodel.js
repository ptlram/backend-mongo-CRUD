import mongoose from "mongoose";
import validator from "validator";

const registerschema = new mongoose.Schema(
    {
        name: {
            type:String,
            require:true
        },
        email: {
            type:String,
            require:true,
            validate(value){
                if(!validator.isEmail(value))
                {
                   throw new Error("invalid")
                }
            }
            
        },
        age: {
            type:String,
            require:true
        },
        username: {
            type:String,
            require:true
        },
        password: {
            type:String,
            require:true
        },
        conformpassword: {
            type:String,
            require:true
        },
    }
)
 const Play= new mongoose.model("Play",registerschema)

export default Play;
import mongoose from 'mongoose'

const userInfoSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    username : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        enum : ['male' , 'female'],
        default : 'male'
    },
    password : {
        type : String,
        required : true
    }

})

const userInfoModel = new mongoose.model('User' , userInfoSchema);

export default userInfoModel;

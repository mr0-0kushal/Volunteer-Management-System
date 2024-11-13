import userInfoModel from '../models/userInfo.models.js'


const storeUserInfoToDB = async(req , res) => {

    const {email , username , gender , password} = req.body;

    const isUser = await userInfoModel.find({email : email})

    if(isUser){
        res.status(400).send({msg : "Email Already in use !"})
    }

    await userInfoModel.create({
        email : email, 
        username : username,
        gender : gender,
        password : password
    })
    .then(() => {
        console.log("User Created !!")
        res.status(201).send({msg : "User info created  !"}
        )  
    })
    .catch(() => {
        console.log("Something Error !!")
        res.status(400).send({msg : "User info Not created "})
    })


}

export default  storeUserInfoToDB ;
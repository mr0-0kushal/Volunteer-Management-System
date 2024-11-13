import userTaskModel from '../models/userTask.model.js'
import userInfoModel from '../models/userDetails.models.js'


const assignTask = async (req , res) => {

    const {title, description, email, status, deadline } = req.body;

    const isUserExist = await userInfoModel.find({email : email});

    if(!isUserExist){
        res.status(402).send({msg : "user not found !"})
    }

    await userTaskModel.create({
        title : title,
        description : description,
        email : email ,
        status : status,
        deadline : deadline
    })
    .then(() => {
        res.status(201).send({msg : "User created Successfully !"})
    })
    .catch((error) => {
        console.log(`user creation failure for ${email} : `,error)
        res.status(400).send({msg : "user not created !"})
    })
}

export default assignTask;
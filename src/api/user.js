import express from 'express';
import { Router } from 'express';
const UserRouter = express.Router();
// Define routes and middleware for UserRouter
import { createHash } from 'node:crypto'
import schema from '../schema.js'
const User = schema.User;

UserRouter.post('/user', async (req, res) => {
    console.log("try2")
    let username = req.body.username
    let password = req.body.password
    let hashed_password = createHash('sha3-256').update(password).digest('hex')
    const userExisted = await User.findOne({username: username})
        if(userExisted != null){
            res.send({ isCreated: false
            , error_message: "User already exists", error_code: 3 })
                console.log("try3")
        }else{
            console.log("try4")
            const result = await User.insertOne({username : username, password: hashed_password})
            if (!result) res.send({ isCreated: false, error_message: "Failed to create user", error_code: 4 })
            else res.send({ isCreated: true })
        }      
    
})


export default UserRouter;

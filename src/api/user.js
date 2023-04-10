import express from 'express';
import { Router } from 'express';
const UserRouter = new Router();
// Define routes and middleware for UserRouter
import { createHash } from 'node:crypto'
import db from "../mongodb_connection.js"

UserRouter.post('/user', async (req, res) => {
    console.log("try2")
    let username = req.body.username
    let password = req.body.password
    let hashed_password = createHash('sha3-256').update(password).digest('hex')
    const userExisted = await db.collection("users").findOne({username: username})
        if(userExisted != null){
            res.send({ isCreated: false
            , error_message: "User already exists", error_code: 3 })
                console.log("try3")
        }else{
            console.log("try4")
            const result = await db.collection("users").insertOne({username : username, password: hashed_password})
            if (!result) res.send({ isCreated: false, error_message: "Failed to create user", error_code: 4 })
            else res.send({ isCreated: true })
        }      
    
})
UserRouter.get('/user/:username', async (req, res) => {
    console.log("get act!");
    let username = req.params.username
    const result = await db.collection("users").findOne({"username" : username})
    if (!result) res.send(null)
    else res.send(result)
})

UserRouter.get('/*', async (req, res) => {
    console.log("get act!");
     res.send('HELLO WORLD');
})

UserRouter.delete("/user/:username", async (req, res) => {
    const username = req.params.username
    const result = await db.collection("users").deleteOne({ "username": username })
    if (!result) res.send({isDeleted: false})
    else res.send({isDeleted: true})
})

export default UserRouter;

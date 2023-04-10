import express from 'express';
import { Router } from 'express';
const UserRouter = new Router();
// Define routes and middleware for UserRouter
import { createHash } from 'node:crypto'
import db from "../mongodb_connection.js"


//Function: createUser
UserRouter.post('/user', async (req, res) => {
    try {
        let username = req.body.username;
        let password = req.body.password;
        let hashed_password = createHash('sha3-256').update(password).digest('hex');
        const userExisted = await db.collection("users").findOne({ username: username });

        if (userExisted != null) {
            res.send({ isCreated: false, error_message: "User already exists"});
        } else {
            const result = await db.collection("users").insertOne({ username: username, password: hashed_password });
            if (!result) {
                res.send({ isCreated: false, error_message: "Failed to create user"});
            } else {
                res.send({ isCreated: true });
            }
        }
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).send({ isCreated: false, error_message: "Internal server error"});
    }
});

//Function: retrieveUser
UserRouter.get('/user/:username', async (req, res) => {
    let username = req.params.username
    const result = await db.collection("users").findOne({"username" : username})
    if (!result) res.send(null)
    else res.send(result)
})

//Function: deleteUser
UserRouter.delete("/user/:username", async (req, res) => {
    const username = req.params.username
    const result = await db.collection("users").deleteOne({ "username": username })
    if (!result) res.send({isDeleted: false})
    else res.send({isDeleted: true})
})

export default UserRouter;

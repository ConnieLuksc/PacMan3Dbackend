import express from 'express'
import mongoose from 'mongoose'

import UserRouter from './api/user.js'
import MapRouter from './api/map.js'
import GameRouter from './api/game.js'
import BlogRouter from './api/blog.js'
import helper from "./functions.js"
import schema from './schema.js'

import db from "./mongodb_connection.js"
import bodyParser from 'body-parser'
import cors from 'cors'

// const url = "mongodb://localhost:27017/pacman"
// const port = 3000;
const app = express();
// const db = mongoose.connection;
// mongoose.connect(url, {})
//     .then(result => console.log("database connected"))
//     .catch(err => console.log(err))

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors({orogin: '*'}))

app.use('/api/user', UserRouter)
app.use('/api/map', MapRouter)
app.use('/api/game', GameRouter)
app.use('/api/blog', BlogRouter)

app.get('/', (req,res) => {
    res.send("<h1>hello from node js app</h1>")
})

app.listen(3000,'127.0.0.1')



// await helper.createUser("a1", "password").then(res => console.log(res))
await helper.deleteUser("user1").then(res => res.json()).then(res => console.log(res))
//await helper.retrieveUser("user1").then(res => console.log(res))







import express from 'express'
import mongoose from 'mongoose'

const app = express();
import UserRouter from './api/user.js'
import MapRouter from './api/map.js'
import GameRouter from './api/game.js'
import BlogRouter from './api/blog.js'
import helper from "./functions.js"
import schemas from './schema.js'

import bodyParser from 'body-parser'
import cors from 'cors'


mongoose.connect('mongodb+srv://Pacman:1234@pacman.ggmpckr.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;
db.once('open', () => {
    console.log('DB connection successful');
    app.use(bodyParser.json({limit: '50mb'}))
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(cors({orogin: '*'}))

    mongoose.model('User', schemas.UserSchema);
    mongoose.model('Game', schemas.GameSchema);
    mongoose.model('Map', schemas.MapSchema);
    mongoose.model('Blog', schemas.BlogSchema);

    app.use('/api/user', UserRouter)
    app.use('/api/map', MapRouter)
    app.use('/api/game', GameRouter)
    app.use('/api/blog', BlogRouter)
});


// start the server
app.listen(3000);

await helper.createUser("a1", "password").then(res => console.log(res))


export default db





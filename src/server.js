import express from 'express'

const app = express();
import UserRouter from './api/user.js'
import MapRouter from './api/map.js'
import GameRouter from './api/game.js'
import BlogRouter from './api/blog.js'
import helper from "./functions.js"

import db from "./mongodb_helper.js"

import bodyParser from 'body-parser'
import cors from 'cors'

app.use(bodyParser.json({limit: '50mb'}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors({orogin: '*'}))

app.use('/api/user', UserRouter)
app.use('/api/map', MapRouter)
app.use('/api/game', GameRouter)
app.use('/api/blog', BlogRouter)

app.listen(8007, '127.0.0.1')

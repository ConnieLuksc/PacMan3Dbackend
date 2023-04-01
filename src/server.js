import express from 'express'

const app = express();
import UserRouter from './api/users.js'
import CommentRouter from './api/comments.js'
import LocationRouter from './api/locations.js'
import EventRouter from './api/events.js'
import helper from "./functions.js"

import db from "./mongodb_helper.js"

import bodyParser from 'body-parser'
import cors from 'cors'

import { MongoClient } from "mongodb";
const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
const db = client.db("PacMan")

export default db
// import express from 'express'
// import bodyParser from 'body-parser'
// import cors from 'cors'
// import mongoose from 'mongoose';

// const app = express();
// // This module is for parsing the content in a request body (installed with npm)
// // Use parser to obtain the content in the body of a request
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// mongoose.connect('mongodb+srv://stu098:p323877W@cluster0.qsanyuv.mongodb.net/stu098');
// app.use(cors());

// const db = mongoose.connection;

// db.on('error', console.error.bind(console, 'Connection error:'));
// // Upon opening the database successfully
// db.once('open', () => {
//     console.log("Connected to MongoDB...");
// })
// export default db
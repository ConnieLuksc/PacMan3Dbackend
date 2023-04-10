import express from 'express'
import mongoose from 'mongoose'

const url = "mongodb://localhost:27017/pacman"
const db = mongoose.connection;
mongoose.connect(url, {})
    .then(result => console.log("database connected"))
    .catch(err => console.log(err))

export default db
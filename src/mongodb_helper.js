import { MongoClient } from "mongodb";
const uri = "mongodb://127.0.0.1:27018";
const client = new MongoClient(uri)
const db = client.db("mydb")

export default db
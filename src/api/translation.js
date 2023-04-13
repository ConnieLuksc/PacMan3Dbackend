import express from 'express';
import { Router } from 'express';
const TranslationRouter = new Router();
import db from "../mongodb_connection.js"

TranslationRouter.post("/saveTran", async (req, res) => {
    const { en, ch, jp } = req.body;
    const result = await db.collection("translations").insertOne({
      tran: {
        en: en,
        ch: ch,
        jp: jp
      }
    });
    if (result) {
      res.send({ isSaved: true, message: "Translation saved successfully" });
    } else {
      res.send({ isSaved: false, error_message: "Failed to save translation" });
    }
  });


  TranslationRouter.get("/getTran", async (req, res) => {
    const { id } = req.query;
    const result = await db.collection("translations").findOne({ _id: ObjectId(id) });
    if (result) {
      res.send({ tran: result.tran });
    } else {
      res.send({ error_message: "Translation not found" });
    }
  });

  export default TranslationRouter
import express from 'express';
import { Router } from 'express';
const BlogRouter = new Router();
import db from "../mongodb_connection.js"

BlogRouter.post("/add", async (req, res) => {
    const { title, content, creatorId } = req.body;
    const result = await db.collection("blogs").insertOne({ title: title, content: content, creatorId: creatorId, createdAt: new Date() });
    if (result.insertedId) {
        res.send({ isAdded: true, message: "Blog added successfully" });
    } else {
        res.send({ isAdded: false, error_message: "Failed to add blog" });
    }
});

BlogRouter.get("/get", async (req, res) => {
    const creatorId = req.params.creatorId;
    const result = await db.collection("blogs").find({ creatorId: creatorId }).toArray();
    if (result) {
        res.send(result);
    } else {
        res.send(null);
    }
});

BlogRouter.delete("/:blogId", async (req, res) => {
    const blogId = req.params.blogId;
    try {
        // Find the blog by blogId
        const result = await db.collection("blogs").deleteOne({ _id: ObjectId(blogId) });
        if (result.deletedCount === 0) {
            // If blog not found, return error response
            res.send({ isDeleted: false, error_message: "Blog not found" });
        } else {
            // Return success response
            res.send({ isDeleted: true, message: "Blog deleted successfully" });
        }
    } catch (err) {
        console.error(err);
        res.send({ isDeleted: false, error_message: "Failed to delete blog" });
    }
});

BlogRouter.post("/like", async (req, res) => {
    const { blogId } = req.body;
    try {
        // Find the blog by its blogId
        const blog = await db.collection("blogs").findOne({ _id: blogId });
        if (!blog) {
            res.send({ isLiked: false, error_message: "Blog not found" });
            return;
        }
        // Update the number of likes for the blog
        const result = await db.collection("blogs").updateOne({ _id: blogId }, { $inc: { numberOfLikes: 1 } });
        if (!result) {
            res.send({ isLiked: false, error_message: "Failed to like the blog" });
        } else {
            res.send({ isLiked: true });
        }
    } catch (error) {
        console.error(error);
        res.status(500).send({ error_message: "Internal server error" });
    }
});



export default BlogRouter;

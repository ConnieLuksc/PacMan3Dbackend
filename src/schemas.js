import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
    userId: string, // User ID provided by the user
    username: { type: String, required: true, unique: true }, // Username provided by the user
    password: { type: String, required: true }, // Password provided by the user
    highestScore: number // Highest score achieved in the game    
})

const GameSchema = new Schema({
    userId: { type: String, required: true }, // User ID of the player
    score: { type: Number, required: true }, // Score achieved in the game
    gameData: { type: String }, // Game data
    createdAt: { type: Date, default: Date.now } // Timestamp of game creation
});

const MapSchema = new Schema({
    creatorId: { type: String, required: true }, // User ID of the map creator
    mapSize: { type: Number, required: true }, // Size of the game map
    mapComponents: { type: String }, // Map components data
    createdAt: { type: Date, default: Date.now } // Timestamp of map creation
});

const BlogSchema = new Schema({
    title: { type: String, required: true }, // Title of the blog
    content: { type: String, required: true }, // Content of the blog
    creatorId: { type: String, required: true }, // User ID of the blog creator
    createdAt: { type: Date, default: Date.now } // Timestamp of blog creation
});

const Map = model('Map', MapSchema);
const User = model('User', UserSchema);
const Game = model('Game', GameSchema);
const Blog = model('Blog', BlogSchema);

export default {Map, User, Game, Blog}


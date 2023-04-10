import { Parser } from 'xml2js';
const parser = new Parser(/* options */);

const localAddress = "http://127.0.0.1:3000/api/"
const userAPI = 'http://127.0.0.1:3000/api/user/';
const mapAPI = 'http://127.0.0.1:3000/api/map/';
const gameAPI = 'http://127.0.0.1:3000/api/game/';
const blogAPI = 'http://127.0.0.1:3000/api/blog/';


async function signUp(username, email, password) {
    try {
        const url = userAPI + "signup";
        const options = {
            method: 'POST', // HTTP method: GET, POST, PUT, DELETE, etc.
            headers: {  'Content-Type': 'application/json'}, // Set the request body type to JSON
            body: JSON.stringify(body) // Convert the body to JSON format
          };
        const response = await fetch(url, options); // Fetch the data from the API
        return data; // Return the data retrieved from the API
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data from the API'); // Throw an error if fetching fails
      }
    }

async function login(email, password) {
    try {
        const url = userAPI + "signup";
        const options = {
            method: 'POST', // HTTP method: GET, POST, PUT, DELETE, etc.
            headers: {  'Content-Type': 'application/json'}, // Set the request body type to JSON
            body: JSON.stringify(body) // Convert the body to JSON format
          };
        const response = await fetch(url, options); // Fetch the data from the API
        return data; // Return the data retrieved from the API
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data from the API'); // Throw an error if fetching fails
      }
    }

async function reset(username, oldPassword, newPassword) {
    try {
        const url = userAPI + "signup";
        const options = {
            method: 'POST', // HTTP method: GET, POST, PUT, DELETE, etc.
            headers: {  'Content-Type': 'application/json'}, // Set the request body type to JSON
            body: JSON.stringify(body) // Convert the body to JSON format
          };
        const response = await fetch(url, options); // Fetch the data from the API
        return data; // Return the data retrieved from the API
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data from the API'); // Throw an error if fetching fails
      }
    }

async function deleteUser(username) {
    try {
        const url = userAPI + username;
        const options = {
            method: 'DELETE', // HTTP method: GET, POST, PUT, DELETE, etc.
            headers: {  'Content-Type': 'application/json'}, // Set the request body type to JSON
            body: JSON.stringify(body) // Convert the body to JSON format
            };
        const response = await fetch(url, options); // Fetch the data from the API
        return data; // Return the data retrieved from the API
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data from the API'); // Throw an error if fetching fails
        }
    }

async function retrieveUser(username) {
    try {
        const url = userAPI + username;
        const options = {
            method: 'GET', // HTTP method: GET, POST, PUT, DELETE, etc.
            headers: {  'Content-Type': 'application/json'}, // Set the request body type to JSON
            body: JSON.stringify(body) // Convert the body to JSON format
            };
        const response = await fetch(url, options); // Fetch the data from the API
        return data; // Return the data retrieved from the API
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data from the API'); // Throw an error if fetching fails
        }
    }


async function addBlog(title, content, creatorID) {
    try {
        const url = blogAPI + "add";
        const options = {
            method: 'POST', // HTTP method: GET, POST, PUT, DELETE, etc.
            headers: {  'Content-Type': 'application/json'}, // Set the request body type to JSON
            body: JSON.stringify(body) // Convert the body to JSON format
            };
        const response = await fetch(url, options); // Fetch the data from the API
        return data; // Return the data retrieved from the API
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data from the API'); // Throw an error if fetching fails
        }
    }

export default {signUp, login, reset, deleteUser, addBlog, retrieveUser};



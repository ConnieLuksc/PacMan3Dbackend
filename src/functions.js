import { Parser } from 'xml2js';
const parser = new Parser(/* options */);

const localAddress = "http://127.0.0.1:3000/api/"

const userAPI = 'http://127.0.0.1:3000/api/user/';
const mapAPI = 'http://127.0.0.1:3000/api/map/';
const gameAPI = 'http://127.0.0.1:3000/api/game/';
const blogAPI = 'http://127.0.0.1:3000/api/blog/';


async function createUser(username, password) {
    console.log("try1")
    try {
        return await fetch(userAPI + "user", { 
            method: 'POST', 
            body: JSON.stringify({"username": username, "password": password}), 
            headers: { "Content-Type": "application/json" }, 
            mode: 'cors', 
            cache: 'default' 
        });
    } catch (err) {
        console.log(err);
    }
}

async function deleteUser(username) {
    try {
      return await fetch(userAPI + 'user/' + username, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        cache: 'default'
      });
    } catch (err) {
      console.log(err);
    }
  }

async function retrieveUser(username) {
    console.log("function retrieve user");
	try {
        console.log("try retrieve")
		return await fetch(userAPI + "/" + username, { method: 'GET', headers: { "Content-Type": "application/json" }, mode: 'cors', cache: 'default' })
	} catch (err) {
        console.log("error")
		console.log(err)
	}
}

async function addBlog(title, content, creatorID) {
    try {
        return await fetch(blogAPI + "add", { 
            method: 'POST', 
            body: JSON.stringify({"title": title, "content": content, "creatorID": creatorID}), 
            headers: { "Content-Type": "application/json" }, 
            mode: 'cors', 
            cache: 'default' 
        });
    } catch (err) {
        console.log(err);
    }
}

export default {createUser, deleteUser, addBlog, retrieveUser};



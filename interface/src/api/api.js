import React from 'react'
import axios from 'axios'

const defaultOptions = {
	baseURL: 'http://localhost:8000',
	headers: {
        'Content-Type': 'application/json'
    }
};

let instance = axios.create(defaultOptions);

async function getToken() {

	const response = await instance.post("/api-auth/", {
		username: "admin",
		password: "teste123"
	})
	.then(result => {
		// Armazenamento da variável token na cache do navegador;

		localStorage['tokenLwandi'] = result.data.token;

		return result;
	})
	.catch(error => {
		console.log(error);
		return error;
	});
};

const promise = getToken();

var myToken = localStorage['tokenLwandi'] || 'default';

instance.defaults.headers.common['Authorization'] = myToken ? `Token ${myToken}` : '';

export async function getPosts(recents=false) {

	var response = await instance.get('/posts');

	var posts = response.data;
	
	if(recents)
		posts = posts.slice(0, 3);

	return posts;

}

export async function getPost(id) {

	var response = await instance.get(`/posts/${id}`);
	return response.data;

}

export async function getAlbums(recents=false) {

	var photos = await instance.get('/photos');
	var albums = await instance.get('/albums');

	console.log(photos);

	albums.data.forEach(element => {
		element.cover = photos.data[0].path;
	});
	
	if(recents)
		albums.data = albums.data.slice(0, 4);

	return albums.data;

}

export async function getAlbum(id) {

	var album = await instance.get(`/albums/${id}`);
	return album.data;

}

export async function getPhotos(album_id) {

	var photos = await instance.get('/photos');
	return photos.data;

}
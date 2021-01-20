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

let myToken = localStorage['tokenLwandi'] || 'default';

instance.defaults.headers.common['Authorization'] = myToken ? `Token ${myToken}` : '';

export async function getPosts(recents=false) {

	let response = await instance.get('/posts');

	let posts = response.data;
	
	if(recents)
		posts = posts.slice(0, 3);

	return posts;

}

export async function getPost(id) {

	let response = await instance.get(`/posts/${id}`);
	return response.data;

}

export async function getAlbums(recents=false) {

	let albums = await instance.get('/albums');

	for (let album of albums.data) {
		let photos = await instance.get(`/photos?album_fk=${album.id}`);
		album.cover = photos.data[0].path;
	}
	
	if(recents)
		albums.data = albums.data.slice(0, 4);

	return albums.data;

}

export async function getAlbum(id) {

	let album = await instance.get(`/albums/${id}`);
	return album.data;

}

export async function getPhotos(album_id) {

	let photos = await instance.get(`/photos?album_fk=${album_id}`);
	return photos.data;

}
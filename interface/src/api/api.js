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

export default instance;
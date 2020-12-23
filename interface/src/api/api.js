import React from 'react'
import axios from 'axios'

const defaultOptions = {
	baseURL: 'https://a5223d989414.ngrok.io/',
	//baseURL: 'http://172.29.0.3:8000',
};

const instance = axios.create(defaultOptions);

const reponse = instance.post("/api-auth", {
	username: "admin",
	password: "teste123"
});

console.log(reponse)

export default instance;
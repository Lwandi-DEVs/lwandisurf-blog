import React from 'react'
import axios from 'axios'

const defaultOptions = {
	baseURL: 'http://web_django:8000',
	headers: {
		'Content-Type': 'application/json',
		'Authorization': '08ea903988c7743c9b59c9e348057cc4d8b0119d'
	}
};

const instance = axios.create(defaultOptions);

export default instance;
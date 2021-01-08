import React from "react";

import instance from "../../api/api.js"

// import { Container } from './styles';


var dictPhotos = new Map();

function Galery() {
  return <h1>Galeria</h1>;
}

async function getPhotos() {

	const photos = await instance.get('/photos');
	const albums = await instance.get('/albums');

	console.log(photos.data); // Photos
	console.log(albums.data); // Albuns

}

getPhotos();

export default Galery;

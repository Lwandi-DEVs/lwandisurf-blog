import React from "react";

import instance from "../../api/api.js"

// import { Container } from './styles';

function Galery() {
  return <h1>Galeria</h1>;
}


async function getAlbums() {

	const response = await instance.get('/photos')

	console.log(response);

}

var albuns = getAlbums();

export default Galery;

import React, { useEffect, useState } from "react";
import AlbumPreview from "../../components/albumPreview";

import { getAlbums } from "../../api/api.js";

function GalleryPreview() {

    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAlbums(true).then((payload) => {setAlbums(payload)});
	}, []);

    return (
        <div id="fh5co-portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                        <h3>Albuns recentes da Galeria</h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row row-bottom-padded-md">

                    <div className="albums-list albums-list-recent">
                        {albums.map((album) => {
                            return (
                                <AlbumPreview 
                                    key = {album.id}
                                    id = {album.id}
                                    title = {album.name} 
                                    image = {album.cover} 
                                /> 
                            );
                        })}
                    </div>

                    <div className="clearfix visible-md-block"></div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-md-offset-4 text-center animate-box">
                        <a href="/gallery" className="btn btn-primary btn-lg"> Nossa galeria</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GalleryPreview;

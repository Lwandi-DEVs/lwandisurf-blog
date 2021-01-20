import React, { useEffect, useState } from "react";
import SocialLinks from "../../components/socialLinks";
import Header from "../../components/header";
import Footer from "../../components/footer/index";
import BannerIntro from "../../components/bannerIntro";
import AlbumPreview from "../../components/albumPreview";

import { getAlbums } from "../../api/api.js";

function Galery() {

	const [albums, setAlbums] = useState([]);

    useEffect(() => {
        getAlbums().then((payload) => {setAlbums(payload)});
	}, []);

	return (
		<div id="fh5co-wrapper">
            <div id="fh5co-page">
                <SocialLinks />
                <Header />

                <BannerIntro
                    mainTitle="Galeria de fotos"
                    subtitle=""
                    image="images/galeria4.jpg"
                />

				<div id="fh5co-blog-section" className="fh5co-section-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box fadeInUp animated">
                                <h3>Nossos albums</h3>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div id="albums-list" className="row row-bottom-padded-md albums-list">
                            
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
                    </div>
                    
                </div>

				<Footer />
                
            </div>
		</div>
	);
}

export default Galery;

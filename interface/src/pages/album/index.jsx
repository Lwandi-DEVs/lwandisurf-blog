import React, { useEffect, useState } from "react";
import SocialLinks from "../../components/socialLinks";
import Header from "../../components/header";
import Footer from "../../components/footer/index";

import { getAlbum, getPhotos } from "../../api/api.js";

function Album({match}) {
  
    const [album, setAlbum] = useState([]);

    useEffect(() => {
        getAlbum(match.params.id).then((payload) => {setAlbum(payload)});
    }, []);

    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        getPhotos(match.params.id).then((payload) => {setPhotos(payload)});
    }, []);

    let date = new Date(album.created);
    date = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();

    return (
        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <SocialLinks />
                <Header />

                <div id="fh5co-blog-section" className="fh5co-section-gray">

                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box fadeInUp animated">
                                <h3>{album.name}</h3>
                                <span className="text-muted">{date}</span>
                            </div>
                        </div>
                    </div>

                    <div className="container">

                        <div className="row mb-5">
                            <div className="col-md-10 col-md-offset-1 text-justify">
                                <p>{album.description}</p>
                            </div>
                        </div>

                        <div id="photos-list" className="row row-bottom-padded-md photos-list">
                            
                            {photos.map((photo) => {
                                return (
                                    <img src={photo.path} alt={photo.name} key={photo.id}/>
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

export default Album;

import React from "react";

function AlbumPreview({id, title, image}) {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="fh5co-blog animate-box">
                <a href={`/album/${id}`}>
                    <img className="img-responsive" src={image} alt={title} />
                </a>
                <div className="blog-text">
                    <div className="prod-title">
                        <h3>
                            <a href={`/album/${id}`}>{title}</a>
                        </h3>
                        <p> <a href={`/album/${id}`}>Veja todas as fotos...</a> </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlbumPreview;

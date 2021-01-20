import React from "react";

function PostPreview({id, title, image, content}) {
    content = content.replace(/<\/?[^>]+(>|$)/g, "");

    return (
        <div className="col-lg-4 col-md-4 col-sm-6">
            <div className="fh5co-blog animate-box">
                <a href={`/blogPost/${id}`}>
                    <img className="img-responsive" src={image} alt={title} />
                </a>
                <div className="blog-text">
                    <div className="prod-title">
                        <h3>
                            <a href={`/blogPost/${id}`}>{title}</a>
                        </h3>
                        <p>{content.substring(0, 150)}...</p>
                        <p> <a href={`/blogPost/${id}`}>Leia mais...</a> </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostPreview;

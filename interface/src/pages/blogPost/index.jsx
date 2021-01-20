import React, { useEffect, useState } from "react";
import SocialLinks from "../../components/socialLinks";
import Header from "../../components/header";
import Footer from "../../components/footer/index";
import BannerIntro from "../../components/bannerIntro";

import { getPost } from "../../api/api.js";

function BlogPost() {
  
    const [post, setPost] = useState([]);

    useEffect(() => {
        getPost(5).then((payload) => {setPost(payload)});
    }, []);

    return (
        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <SocialLinks />
                <Header />
                
                <BannerIntro
                    mainTitle={post.title}
                    subtitle=""
                    image={post.cover}
                />

                <div id="fh5co-blog-section" className="fh5co-section-gray">

                    <div className="container">

                        <div dangerouslySetInnerHTML={{ __html: post.content }} />

                    </div>
                    
                </div>

                <Footer />
            </div>
        </div>
    );
}

export default BlogPost;

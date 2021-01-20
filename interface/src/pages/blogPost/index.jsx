import React, { useEffect, useState } from "react";
import SocialLinks from "../../components/socialLinks";
import Header from "../../components/header";
import Footer from "../../components/footer/index";
import BannerIntro from "../../components/bannerIntro";

import { getPost } from "../../api/api.js";

function BlogPost({match}) {
  
    const [post, setPost] = useState([]);

    useEffect(() => {
        getPost(match.params.id).then((payload) => {setPost(payload)});
    }, []);

    var date = new Date(post.created);
    date = date.getDate()+'/'+(date.getMonth()+1)+'/'+date.getFullYear();

    return (
        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <SocialLinks />
                <Header />
                
                <BannerIntro
                    mainTitle={post.title}
                    subtitle={date}
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

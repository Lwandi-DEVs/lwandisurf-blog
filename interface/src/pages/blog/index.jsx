import React, { useEffect, useState } from "react";
import SocialLinks from "../../components/socialLinks";
import Header from "../../components/header";
import Footer from "../../components/footer/index";
import BannerIntro from "../../components/bannerIntro";
import PostPreview from "../../components/PostPreview";

import { getPosts } from "../../api/api.js";

function Blog() {
  
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then((payload) => {setPosts(payload)});
    }, []);

    return (
        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <SocialLinks />
                <Header />

                <BannerIntro
                    mainTitle="Blog"
                    subtitle=""
                    image="images/blog-cover.jpg"
                    classExtra="fh5co-cover-center h2-100"
                />
                
                <div id="fh5co-blog-section" className="fh5co-section-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box fadeInUp animated">
                                <h3>Leia. Aprenda. Compartilhe</h3>
                            </div>
                        </div>
                    </div>

                    <div className="container">
                        <div id="posts-list" className="row row-bottom-padded-md">
                            
                        {posts.map((post) => {
                            return (
                                <PostPreview 
                                    key = {post.id}
                                    id = {post.id}
                                    title = {post.title} 
                                    image = {post.cover} 
                                    content = {post.content}
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

export default Blog;

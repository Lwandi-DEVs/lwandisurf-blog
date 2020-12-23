import React from "react";
import SocialLinks from "../../components/socialLinks";
import Header from "../../components/header";
import Footer from "../../components/footer/index";
import BannerIntro from "../../components/bannerIntro";

import instance from "../../api/api.js"

function Blog() {
  return (
    <div id="fh5co-wrapper">
        <div id="fh5co-page">
            <SocialLinks />
            <Header />

            <BannerIntro
                mainTitle="Blog"
                subtitle=""
                image="images/blog-cover.jpg"
                buttonContent="Apoie o projeto"
                btnLink="https://benfeitoria.com/lwandisurf"
                classExtra="fh5co-cover-center h2-100"
            />
            
            <div id="fh5co-blog-section" class="fh5co-section-gray">
                <div class="container">
                    <div class="row">
                        <div class="col-md-8 col-md-offset-2 text-center heading-section animate-box fadeInUp animated">
                            <h3>Leia. Aprenda. Compartilhe</h3>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row row-bottom-padded-md">
                        {/* POST */}
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="fh5co-blog animate-box">
                                <a href="#">
                                    <img className="img-responsive" src="images/blog1.jpg" alt="" />
                                </a>
                                <div className="blog-text">
                                    <div className="prod-title">
                                        <h3>
                                            <a href="#">Medical Mission in Southern Kenya</a>
                                        </h3>
                                        <span className="posted_by">Sep. 15th</span>
                                        <span className="comment">
                                            <a href=""> 21<i className="icon-bubble2"></i></a>
                                        </span>
                                        <p>
                                            Far far away, behind the word mountains, far from the
                                            countries Vokalia and Consonantia, there live the blind
                                            texts.
                                        </p>
                                        <p> <a href="#">Learn More...</a> </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* POST */}
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="fh5co-blog animate-box">
                                <a href="#">
                                    <img className="img-responsive" src="images/blog2.jpg" alt="" />
                                </a>
                                <div className="blog-text">
                                    <div className="prod-title">
                                        <h3>
                                            <a href="#">Medical Mission in Southern Kenya</a>
                                        </h3>
                                        <span className="posted_by">Sep. 15th</span>
                                        <span className="comment">
                                            <a href=""> 21<i className="icon-bubble2"></i></a>
                                        </span>
                                        <p>
                                            Far far away, behind the word mountains, far from the
                                            countries Vokalia and Consonantia, there live the blind
                                            texts.
                                        </p>
                                        <p> <a href="#">Learn More...</a> </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* POST */}
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="fh5co-blog animate-box">
                                <a href="#">
                                    <img className="img-responsive" src="images/blog3.jpg" alt="" />
                                </a>
                                <div className="blog-text">
                                    <div className="prod-title">
                                        <h3>
                                            <a href="#">Medical Mission in Southern Kenya</a>
                                        </h3>
                                        <span className="posted_by">Sep. 15th</span>
                                        <span className="comment">
                                            <a href=""> 21<i className="icon-bubble2"></i></a>
                                        </span>
                                        <p>
                                            Far far away, behind the word mountains, far from the
                                            countries Vokalia and Consonantia, there live the blind
                                            texts.
                                        </p>
                                        <p> <a href="#">Learn More...</a> </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                
            </div>

            <Footer />
        </div>
    </div>
  );
}

const response = instance.get('/posts');

console.log(response)

export default Blog;

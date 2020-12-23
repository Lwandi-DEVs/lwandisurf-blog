import React from "react";

// import { Container } from './styles';

function BlogPreview() {
    return (
        <div id="fh5co-blog-section" className="fh5co-section-gray">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2 text-center heading-section animate-box">
                        <h3>Postagens recentes do Blog</h3>
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
                                        <a href="">21<i className="icon-bubble2"></i></a>
                                    </span>
                                    <p>
                                        Far far away, behind the word mountains, far from the
                                        countries Vokalia and Consonantia, there live the blind
                                        texts.
                                    </p>
                                    <p><a href="#">Learn More...</a></p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* POST */}
                    <div className="col-lg-4 col-md-4 col-sm-6">
                        <div className="fh5co-blog animate-box">
                            <a href="#">
                                <img className="img-responsive" src="images/blog2.jpg" alt=""/>
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
                                    <p><a href="#">Learn More...</a></p>
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
                                        <a href=""> 21<i className="icon-bubble2"></i> </a>
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

                    <div className="clearfix visible-md-block"></div>
                </div>

                <div className="row">
                    <div className="col-md-4 col-md-offset-4 text-center animate-box">
                        <a href="#" className="btn btn-primary btn-lg"> Our Blog</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPreview;

import React from "react";

const Footer = () => {
        return (
        <footer>
            <div id="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 text-center">
                            <p className="fh5co-social-icons">
                                <a href="https://linktr.ee/lwandisurf" target="_blank" title="Linktree">
                                    <i className="icon-dribbble2"></i>
                                </a>
                                <a href="https://www.facebook.com/lwandisurf/" target="_blank" title="Facebook">
                                    <i className="icon-facebook2"></i>
                                </a>
                                <a href="https://www.instagram.com/lwandisurf/" target="_blank" title="Instagram">
                                    <i className="icon-instagram"></i>
                                </a>
                            </p>
                        <p>
                            Copyright 2020 @lwandisurf. All Rights
                            Reserved. <br />
                            Made with <i className="icon-heart3"></i> by{" "}
                            <a href="http://www.growtechnologies.com.br/" target="_blank">
                            Growtech
                            </a>{" "}
                            / Template base from:{" "}
                            <a href="http://freehtml5.co/" target="_blank">
                            Free Html5
                            </a>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;

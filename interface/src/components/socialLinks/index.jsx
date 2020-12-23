import React from "react";

// import { Container } from './styles';

function SocialLinks() {
    return (
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-6 text-left fh5co-link">
                        {/* <a href="#">FAQ</a>
                        <a href="#">Forum</a>
                        <a href="#">Contact</a> */}
                    </div>
                    <div className="col-md-6 col-sm-6 text-right fh5co-social">
                        <a href="https://linktr.ee/lwandisurf" className="grow" title="Linktree">
                            <i className="icon-dribbble2"></i>
                        </a>
                        <a href="https://www.facebook.com/lwandisurf/" className="grow" title="Facebook">
                            <i className="icon-facebook2"></i>
                        </a>
                        <a href="https://www.instagram.com/lwandisurf/" className="grow" title="Instagram">
                            <i className="icon-instagram2"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SocialLinks;

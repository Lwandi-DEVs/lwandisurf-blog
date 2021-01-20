/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer/index";
import SocialLinks from "../../components/socialLinks";
import BlogPreview from "../../components/blogPreview";
import BannerIntro from "../../components/bannerIntro";
import GalleryPreview from "../../components/galleryPreview";
import Projects from "../../components/projects";
import Volunteers from "../../components/volunteers";
import ContactInfo from "../../components/contactInfo";
// import CallBanner from "../../components/callBanner";

const Home = () => {
    return (
        <>
        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <SocialLinks />
                <Header />

                <BannerIntro
                    mainTitle="Lwandisurf"
                    subtitle="Uma onda de esperança"
                    image="images/home-cover.jpg"
                    classExtra="fh5co-cover-center h2-100"
                />
                {/* <!-- end:header-top --> */}
                {/* <CallBanner /> */}

                <div id="fh5co-feature-product" className="fh5co-section-gray">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center heading-section">
                                <h3>Missão, visão e valores.</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="feature-text">
                                    <h3>Missão</h3>
                                    <p>
                                        Criar um espaço seguro para que adolescentes em situação de vulnerabilidade social se envolvam em atividades que melhorem seu bem-estar físico e mental, assim como habilidades acadêmicas e vocacionais.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="feature-text">
                                    <h3>Valores</h3>
                                    <p>
                                        Os nosso valores foram criados junto com a primeira turma durante uma roda de conversa. E o surfe não poderia faltar: <b>S</b>onhar grande, <b>U</b>nião, <b>R</b>espeito, <b>F</b>elicidade e <b>E</b>mpatia.
                                    </p>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div className="feature-text">
                                    <h3>Visão</h3>
                                    <p>
                                        Conectando a comunidade através do surfe.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <GalleryPreview />

                <Volunteers />

                <div id="fh5co-services-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-md-offset-3 text-center heading-section animate-box">
                            <h3>Nossos Projetos</h3>
                            </div>
                        </div>

                        <Projects />
                    </div>
                </div>

                <BlogPreview />

                <ContactInfo />

                <Footer />
            </div>
        </div>
        </>
    );
};
export default Home;

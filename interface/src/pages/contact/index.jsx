import React from "react";
import SocialLinks from "../../components/socialLinks";
import Header from "../../components/header";
import Footer from "../../components/footer/index";
import BannerIntro from "../../components/bannerIntro";
import ContactInfo from "../../components/contactInfo";

function Contact() {
    return (
        <div id="fh5co-wrapper">
            <div id="fh5co-page">
                <SocialLinks />
                <Header />

                <BannerIntro
                    mainTitle="Entre em contato"
                    subtitle="Apoie o projeto via financiamento recorrente pelo Benfeitoria."
                    image="images/contato-cover.jpg"
                />
                
                <ContactInfo />
                
                <Footer />
            </div>
        </div>
    );
}

export default Contact;

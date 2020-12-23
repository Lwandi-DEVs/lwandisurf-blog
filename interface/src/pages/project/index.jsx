import React from "react";
import SocialLinks from "../../components/socialLinks";
import Header from "../../components/header";
import Footer from "../../components/footer/index";
import BannerIntro from "../../components/bannerIntro";
import Projects from "../../components/projects";

function Project() {
  return (
    <div id="fh5co-wrapper">
        <div id="fh5co-page">
            <SocialLinks />
            <Header />

            <BannerIntro
                mainTitle="Nossos projetos"
                subtitle="Vamos surfar juntos nessa!"
                image="images/projeto-cover.jpg"
                buttonContent="Apoie o projeto"
                btnLink="https://benfeitoria.com/lwandisurf"
            />

            <div id="fh5co-about" className="fh5co-content-section container">
                <div className="col-md-10 col-md-offset-1 mb-10 text-justify">
                    <p>“Lwandi” é uma palavra da língua local – changana – o qual traz o significado de “mar”. Assim como deve ser para você, o mar é um local de refúgio e reflexão que traz curas terapêuticas para o ser humano.

                    O projeto Lwandi Surf, localizado em Ponta do Ouro – Moçambique, visa trabalhar, através da terapia do surfe e outras atividades que promovam saúde física e mental, com crianças e jovens locais da cidade que se encontram em situações de vulnerabilidade social.</p>

                    <p>Em muitas cidades de Moçambique, vemos jovens, desde cedo, entrando no mundo do álcool e das drogas, expostos a situações traumáticas e de risco como HIV/AIDS, assim, acabam se distanciando dos estudos e da educação em geral. Em Ponta do Ouro, a realidade não é muito diferente.</p>

                    <p>O Lwandi Surf visa superar as barreiras enfrentadas pelos adolescentes da comunidade. O programa atende às necessidades de saúde mental e física dos participantes por meio de aulas de natação, yoga, aulas de surf, rodas de conversa, aulas de inglês, monitoramento escolar e treinamento vocacional.

                    Através da terapia do surfe, esperamos desenvolver esses jovens, mostrando novos caminhos e maneiras de surfar a onda da vida</p>
                </div>

                <div className="text-center animate-box">
                    <div class="col-md-12 text-center heading-section">
                        <h3>Nossas Atividades</h3>
                    </div>
                </div>

                <Projects />
            </div>

            <Footer />
        </div>
    </div>
  );
}

export default Project;

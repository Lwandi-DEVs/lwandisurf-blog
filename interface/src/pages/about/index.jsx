import React from "react";
import SocialLinks from "../../components/socialLinks";
import Header from "../../components/header";
import Footer from "../../components/footer/index";
import BannerIntro from "../../components/bannerIntro";

function About() {
  return (
    <div id="fh5co-wrapper">
        <div id="fh5co-page">
            <SocialLinks />
            <Header />

            <BannerIntro
                mainTitle="Sobre nós"
                subtitle="Lwandisurf - Uma onda de esperança."
                image="images/about-cover.jpg"
            />
            
            <div id="fh5co-about" className="fh5co-content-section">
                <div className="container">
                    <div className="row">
                        <div className="animate-box">
                            <div class="col-md-12 text-center heading-section">
                                <h3>Nossa História</h3>
                            </div>
                            <div className="col-md-10 col-md-offset-1 text-justify">
                                <p>
                                    No início de 2017, os estudantes de engenharia civil – Gabriel Carrião e Gerson Severo – receberam um convite para ajudar a cavar poços artesianos em comunidades carentes em Moçambique. Foram 40 dias de muito trabalho na região ao redor da cidade de Beira, inaugurando 2 poços em regiões afastadas da cidade. O impacto foi tão grande que prometeram retornar um dia para Moçambique e continuar a trabalhar com projetos sociais.
                                </p>
    
                                <p>
                                    Em abril de 2019, com mais um amigo – Rômulo Lima - todos recémformados em Engenharia Civil, retornaram à Moçambique e começaram um projeto de longo prazo envolvendo viver de fato no país e ajudar através de diversos projetos, incluindo engenharia, educação, esporte, entre outros.
                                </p>
    
                                <p>
                                    Foi assim que o Lwandi Surf, uma organização sem fins lucrativos focada na terapia do surfe e práticas educativas com adolescentes de Ponta do Ouro, foi fundada. Através do Lwandi Surf, aprendemos que um pouco de conhecimento pode fazer uma diferença gigantesca na vida das pessoas.
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="row">
                        <div className="text-center animate-box">
                            <div class="col-md-12 text-center heading-section mt-5">
                                <h3>Fundadores</h3>
                            </div>
                            <div id="fh5co-features">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div className="feature-left">
                                                <div className="feature-copy">
                                                    <h3>Gabriel F. Carrião de Freitas</h3>
                                                    <p class="text-justify">
                                                    Gabriel Carrião, engenheiro civil formado pela UFSM com pósgraduação em BIM Management pela Zigurat (Espanha); já fez intercâmbio de estudos nos EUA e Uruguai. Atuou como voluntário na ONG Engenheiros sem Fronteiras e Liga de Empreendedorismo i9 durante a faculdade. Tem experiência no mercado financeiro e empresa de computação em nuvem. Hoje é cofundador do Lwandi Surf, que utiliza conceitos de surf terapia para apoiar jovens em situação de risco na cidade de Ponta do Ouro, Moçambique. Apaixonado por empreendedorismo, desenvolvimento social e surf.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="feature-left">
                                                <div className="feature-copy">
                                                    <h3>Gerson Severo da Trindade</h3>
                                                    <p class="text-justify">
                                                    Gerson Severo, engenheiro civil formado pela UFSM. Foi Co-fundador da ONG Engenheiros sem Fronteiras que atua em projetos sociais na cidade de Santa Maria. Tem experiência com construção civil e elaboração de projetos. Atualmente Co-fundador do Lwandi Surf. Um guitarrista em busca de banda aqui em Moçambique  Ama natureza, tecnologia e desenvolvimento social.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="feature-left">
                                                <div className="feature-copy">
                                                    <h3>Rômulo de Lima de Oliveira</h3>
                                                    <p class="text-justify">
                                                    Rômulo de Lima de Oliveira, natural de Campo Grande, formado em engenharia civil pela UFSM. Sempre aproveitou o tempo fora da sala de aula para desenvolver projetos paralelos, principalmente após trabalhar por quase dois anos na empresa júnior de engenharia civil - Base Júnior. Trabalhou na ong Infanciação e na empresa social Hemotify. Estudou gestão empresarial no intercâmbio realizado em Monterrey no México. Apaixonado por educação e sua necessidade de mudança, é co-fundador da iniciativa Roda Escola e hoje é um dos idealizadores do projeto Lwandi Surf em Ponta do Ouro - Moçambique.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="text-center animate-box">
                            <div class="col-md-12 text-center heading-section mt-5">
                                <h3>Parcerias</h3>
                            </div>
                            <div id="fh5co-features">

                                <div className="col-md-10 col-md-offset-1 text-justify">
                                    <p>
                                        No Lwandi Surf procuramos parceiros que estejam alinhados com os nossos objetivos, sonhos e ideiais. Nós acreditamos no potencial que os jovens de Ponta do Ouro e Moçambique em geral possuem, bem como na pesquisa e desenvolvimento que a terapia do surfe vem alcançando mundialmente. Muito mais do que apenas doações específicas, valorizamos relações duradouras com outras instituições, ONGs e empresas.
                                    </p>
 
                                    <p>
                                        Sendo um proejto que está recém começando a sua caminhada, possuímos algumas necessidades específicas;
                                    </p>
                                    
                                    <ol>
                                        <li>Acessórios de surfe: Leashes, parafinas, capas de prancha e quilhas;</li>
                                        <li>Pranchas: Usadas ou novas, incluindo bodyboards; </li>
                                        <li>Roupas: Camisetas térmicas (UV) e wetsuits;</li>
                                        <li>Acessórios de natação: Toalhas, óculos de natação e bóias.</li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row div-parcerias">

                        <div className="col-md-12 d-flex flex-wrap justify-content-between align-items-center">
                            <a href="https://www.instagram.com/baleia.solidaria/" target="blank"><img src="images/parceiro1.png" alt=""/></a>
                            <a href="https://exchangedobem.com/lwandi-surf-mocambique/" target="blank"><img src="images/parceiro2.png" alt=""/></a>
                            <a href="http://lumenk.com.br/" target="blank"><img src="images/parceiro3.png" alt=""/></a>
                            <a href="https://intlsurftherapy.org/" target="blank"><img src="images/parceiro4.jpg" alt=""/></a>
                            <a href="https://www.waves-for-change.org/" target="blank"><img src="images/parceiro5.png" alt=""/></a>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
  );
}

export default About;

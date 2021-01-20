import React from "react";

function ContactInfo({id, title, image}) {
    return (
        <div id="fh5co-contact" className="fh5co-content-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div class="col-md-12 text-center heading-section">
                            <h3>Endereço e Redes</h3>
                        </div>
                        
                        <h4>
                            <i className="icon-location mr-2"></i> 
                            Rua Ponta do Ouro Beach Road, Ponta do Ouro, Província de Maputo, Moçambique
                        </h4>

                        <h4>
                            <i className="icon-instagram mr-2"></i> 
                            Siga nosso perfil no
                            <a href="https://www.instagram.com/lwandisurf/?hl=en">Instagram @lwandisurf <i className="icon-link"></i></a>
                        </h4>
                        <h4>
                            <i className="icon-facebook2 mr-2"></i> 
                            Curta nossa página no
                            <a href="https://www.instagram.com/lwandisurf/?hl=en">Facebook @lwandisurf <i className="icon-link"></i></a>
                        </h4>
                    </div>

                    <div className="col-md-4">
                        <div class="col-md-12 text-center heading-section">
                            <h3>Como ajudar?</h3>
                        </div>

                        <div class="row">
                            <h4>
                                <i className="icon-coin-dollar mr-2"></i> 
                                Financiamento Recorrente via
                                <a href="https://benfeitoria.com/lwandisurf">Benfeitoria <i className="icon-link"></i></a>
                            </h4>
                            <h4>
                                <i className="icon-tag2 mr-2"></i> 
                                Dobra e Lwandisurf -
                                <a href="https://querodobra.com.br/colab/lwandi-surf/"> Produtos <i className="icon-link"></i></a>
                            </h4>
                            <h4>
                                <i className="icon-tag2 mr-2"></i> 
                                Camisetas do projeto -
                                <a href="https://www.reserva.ink/exchangedobem?sort=Lwandi"> Produtos <i className="icon-link"></i></a>
                            </h4>
                            <h4>
                                <i className="icon-support mr-2"></i> 
                                Seja um voluntário via
                                <a href="https://exchangedobem.com/lwandi-surf-mocambique/">Exchange do Bem <i className="icon-link"></i></a>
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactInfo;

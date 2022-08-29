import React, { useMemo } from "react";

import Newsletter from './Newsletter/Newsletter';
import LinkText from '../Components/LinkText/LinkText';
import ImageLink from '../Components/ImageLink/ImageLink';

import { Section, Container, Content, FooterImages, Copyright, ContentSocialMedia } from './styles';

function Footer() {
    const isMobile = useMemo(() => {return window.screen.width <= 765}, []);

    const stampOne = require('../Assets/stamp-one.png');
    const stampTwo = require('../Assets/stamp-two.png');
    const stampThree = require('../Assets/stampThree.png');
    const paymentOne = require('../Assets/payment-one.png');
    const paymentTwo = require('../Assets/payment-two.png');
    const paymentThree = require('../Assets/payment-three.png');
    const paymentFour = require('../Assets/payment-four.png');
    const paymentFive = require('../Assets/payment-five.png');
    const logo = require('../Assets/logo.png');
    const instagram = require('../Assets/instagram-vector.png');
    const facebook = require('../Assets/face-vector-footer.png');
    const youtube = require('../Assets/youtube-vector-footer.png');
    const tiktok = require('../Assets/tiktiok-vector-footer.png');


    return(
        <>
            <Newsletter />
            <Section>
                <Container>
                    <div>
                        {!isMobile && <ImageLink src={logo} imageWidth={100} link="#" />}
                        {isMobile && <ContentSocialMedia>
                            <ImageLink src={instagram} imageWidth={10} link="#" />
                            <ImageLink src={facebook} imageWidth={10} link="#" />
                            <ImageLink src={youtube} imageWidth={10} link="#" />
                            <ImageLink src={tiktok} imageWidth={10} link="#" />
                        </ContentSocialMedia>}
                        <Content>
                            Atendimento ao cliente
                            <LinkText text="Ajuda" size={isMobile ? 12 : 16} weight={400} link="#" />
                            <LinkText text="Entre em contato" size={isMobile ? 12 : 16} weight={400} link="#" />
                            <LinkText text="Minha conta" size={isMobile ? 12 : 16} weight={400} link="#" />
                            <LinkText text="Meus pedidos" size={isMobile ? 12 : 16} weight={400} link="#" />
                        </Content>
                        <Content>
                            Entrega e reembolsos
                            <LinkText text="Entregas" size={isMobile ? 12 : 16} weight={400} link="#" />
                            <LinkText text="Entregas e prazos" size={isMobile ? 12 : 16} weight={400} link="#" />
                            <LinkText text="Pedidos, preços e pagamento" size={isMobile ? 12 : 16} weight={400} link="#" />
                            <LinkText text="retornos e reembolsos" size={isMobile ? 12 : 16} weight={400} link="#" />
                        </Content>
                        <Content>
                            Políticas
                            <LinkText text="Termos e condições" size={isMobile ? 12 : 16} weight={400} link="#" />
                            <LinkText text="Políticas de Cookies" size={isMobile ? 12 : 16} weight={400} link="#" />
                            <LinkText text="Pagamentos" size={isMobile ? 12 : 16} weight={400} link="#" />
                        </Content>
                        {isMobile && <Content>
                            Selos
                            <div>
                                <img src={stampOne} />
                                <img src={stampThree} />
                            </div>
                        </Content>}
                        <Content>
                            Métodos de pagamento
                            <div>
                                <ImageLink src={paymentOne} imageWidth={40} link="#" />
                                <ImageLink src={paymentTwo} imageWidth={40} link="#" />
                                <ImageLink src={paymentThree} imageWidth={40} link="#" />
                                <ImageLink src={paymentFour} imageWidth={40} link="#" />
                                <ImageLink src={paymentFive} imageWidth={40} link="#" />
                            </div>
                        </Content>
                    </div>
                    {!isMobile && <FooterImages>
                        <img src={stampOne} />
                        <img src={stampTwo} />
                    </FooterImages>}
                    <Copyright>
                        <p>Todos os direitos reservados © 2020 - Time Codeby Hackathon - 2022</p>
                    </Copyright>
                </Container>
            </Section>
        </>
    );
}

export default Footer;

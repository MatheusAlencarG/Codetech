import React, { useEffect, useState } from "react";

import ImageLink from "../../Components/ImageLink/ImageLink";

import { Container, ContentSideMenu, DepartamentMenu } from './styles';


function SideMenu() {
    const [ menuOpen, setMenuOpen ] = useState(false);

    const facebook = require('../../Assets/facebook-menu-mobile.png');
    const twiter = require('../../Assets/twitter-menu-mobile.png');
    const thumbl = require('../../Assets/tumblr-menu-mobile.png');
    const tiktok = require('../../Assets/tiktok-menu-mobile.png');
    const xVector = require('../../Assets/x-vector.png');
    const arrowVector = require('../../Assets/arrow-vector.png');

    useEffect(() => {
        const menuMobile = document.querySelector('.menuMobile');
        
        if (!menuMobile) return;

        if (menuMobile.classList.contains('menuOpen')) {
            menuMobile.classList.remove('menuOpen')
        } else {
            menuMobile.classList.add('menuOpen')
        }
    }, [menuOpen])

    return(
        <section>
            <Container className='menuMobile'>
                <ContentSideMenu>
                    <img src={xVector} onClick={() => setMenuOpen(!menuOpen)} />
                </ContentSideMenu>
                <ContentSideMenu>
                    <DepartamentMenu>
                        Home
                        <img src={arrowVector} />
                    </DepartamentMenu>
                    <DepartamentMenu>
                        Ver todos os produtos
                        <img src={arrowVector} />
                    </DepartamentMenu>
                    <DepartamentMenu>
                        Fone de ouvido
                        <img src={arrowVector} />
                    </DepartamentMenu>
                    <DepartamentMenu>
                        HomeCarregador
                        <img src={arrowVector} />
                    </DepartamentMenu>
                    <DepartamentMenu>
                        Computador
                        <img src={arrowVector} />
                    </DepartamentMenu>
                    <DepartamentMenu>
                        Casa inteligente
                        <img src={arrowVector} />
                    </DepartamentMenu>
                    <DepartamentMenu>
                        Acessórios
                        <img src={arrowVector} />
                    </DepartamentMenu>
                    <DepartamentMenu>
                        Televisores
                        <img src={arrowVector} />
                    </DepartamentMenu>
                    <DepartamentMenu>
                        projetores
                        <img src={arrowVector} />
                    </DepartamentMenu>
                    <DepartamentMenu>
                        Celulares
                        <img src={arrowVector} />
                    </DepartamentMenu>
                </ContentSideMenu>
                <ContentSideMenu>
                    <p>Sobre</p>
                    <p>Minha conta</p>
                    <p>Meus pedidos</p>
                    <p>Termos & privacidade</p>
                </ContentSideMenu>
                <ContentSideMenu>
                    <ImageLink link="#" src={facebook} imageHeight={32} />
                    <ImageLink link="#" src={twiter} imageHeight={32} />
                    <ImageLink link="#" src={thumbl} imageHeight={32} />
                    <ImageLink link="#" src={tiktok} imageHeight={32} />
                </ContentSideMenu>
            </Container>
        </section>
    );
}

export default SideMenu;
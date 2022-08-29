import React, { useMemo, useEffect, useState } from 'react';
import TopBar from './TopBar/TopBar';

import ImageLink from '../Components/ImageLink/ImageLink';
import LinkText from '../Components/LinkText/LinkText';
import BottomNavigation from './BottomNavigation/BottomNavigation';
import SearchBar from './SearchBar/SearchBar';
import MiniCart from './MiniCart/MiniCart';

import {
    Container,
    HeaderComponent
} from './styles.js';

function Header() {
    const logoImage = require('../Assets/logo.png');
    const loupImage = require('../Assets/loup-vector.png');
    const userImage = require('../Assets/user-vector.png');
    const cartImage = require('../Assets/cart-vector.png');
    const isMobile = useMemo(() => {return window.screen.width <= 765}, []);
    const [ openCart, setOpenCart ] = useState(true);

    useEffect(() => {
        const miniCart = document.querySelector('.miniCartContainer');
        
        if (!miniCart) return;

        if (miniCart.classList.contains('cartOpen')) {
            miniCart.classList.remove('cartOpen')
        } else {
            miniCart.classList.add('cartOpen')
        }
    }, [openCart])

    return(
        <>
            {!isMobile ? (
                <>
                    <TopBar />
                    <HeaderComponent>
                        <Container>
                            <ImageLink link="/" src={logoImage} imageHeight={75} />
                            <ul>
                                <li><LinkText text="Todos os departamentos" link="#" size={14} /></li>
                                <li><LinkText text="Lançamentos" link="#" size={14} /></li>
                                <li><LinkText text="Destaques" link="#" size={14} /></li>
                                <li><LinkText text="PC Gamer" link="#" size={14} /></li>
                                <li><LinkText text="Eletrônicos" link="#" size={14} /></li>
                                <li>Ofertas</li>
                            </ul>
                            <div>
                                <ImageLink link="/" src={loupImage} imageHeight={30} />
                                <ImageLink link="/" src={userImage} imageHeight={30} />
                                <span onClick={() => setOpenCart(!openCart)}>
                                    <ImageLink link="#" src={cartImage} imageHeight={30} />
                                </span>
                            </div>
                        </Container>
                    </HeaderComponent>
                </>
            ) : (
                <>
                    <SearchBar />
                    <BottomNavigation />
                </>
            )}
            <MiniCart />
        </>
    );
}

export default Header;

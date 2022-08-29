import React, { useEffect, useState } from "react";

import ImageLink from "../../Components/ImageLink/ImageLink";
import SideMenu from '../SideMenu/SideMenu';

import { BottomNavigationContainer } from './styles';

function BottomNavigation() {
    const [ openMenu, setOpenMenu ] = useState(true);
    const [ openCart, setOpenCart ] = useState(true);

    const hamburgerMenuVector = require('../../Assets/hamburgerMenu.png');
    const loupVector = require('../../Assets/loup-vector.png');
    const userVector = require('../../Assets/user-circle-vector.png');
    const cartVector = require('../../Assets/cart-vector.png');

    useEffect(() => {
        const menuMobile = document.querySelector('.menuMobile');
        
        if (!menuMobile) return;

        if (menuMobile.classList.contains('menuOpen')) {
            menuMobile.classList.remove('menuOpen')
        } else {
            menuMobile.classList.add('menuOpen')
        }
    }, [openMenu])

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
            <BottomNavigationContainer>
                <img onClick={() => setOpenMenu(!openMenu)} src={hamburgerMenuVector} />
                <ImageLink link="#" src={loupVector} imageWidth={25} />
                <ImageLink link="#" src={userVector} imageWidth={25} />
                <span onClick={() => setOpenCart(!openCart)}>
                    <ImageLink link="#" src={cartVector} imageWidth={25} />
                </span>
            </BottomNavigationContainer>
            <SideMenu />
        </>
    );
}

export default BottomNavigation;
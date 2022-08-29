import React, { useEffect, useState } from "react";

import api from '../../services/api';
import MiniCartProduct from "./MiniCartProduct/MiniCartProduct";

import { Section, ProductsContainer, TotalPriceContainer, Content, ImageClose } from './styles';

type MiniCartProducts = {
    id: number;
    name: string;
    rating: number;
    oldPrice: number;
    price: number;
    image: string;
    container: string;
};

function MiniCart() {
    const [ products, setProducts ] = useState<MiniCartProducts[]>()
    const [ openCart, setOpenCart ] = useState(true);
    let totalPrice = 0;
    const xVector = require('../../Assets/x-vector.png');

    useEffect(() => {
        const productsLocalStorage = localStorage.getItem('miniCartProducts');

        api.get("/getByListId?listId=" + productsLocalStorage)
        .then(response => {
            if (response.status === 200) {
                setProducts(response.data);
            }
        })
        .catch(err => {
            console.error(err);
        })
    }, [])

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
        <Section className="miniCartContainer">
            <Content>
                <h3>Meu carrinho</h3>
            </Content>
            <ProductsContainer>
                {products?.map((product) => {
                    totalPrice = totalPrice + product.price;
                    return(
                        <MiniCartProduct 
                            key={product.id}
                            id={product.id}
                            name={product.name} 
                            oldPrice={product.oldPrice} 
                            price={product.price} 
                            image={product.image} 
                        />
                    );
                })}
            </ProductsContainer>
            <TotalPriceContainer>
                <p>Total</p>
                <p>R$ {totalPrice.toFixed(2).toString().replaceAll('.', ',')}</p>
            </TotalPriceContainer>
            <Content>
                <button>Finalizar compra</button>
            </Content>
            <ImageClose onClick={() => setOpenCart(!openCart)} src={xVector} />
        </Section>
    );
}

export default MiniCart;
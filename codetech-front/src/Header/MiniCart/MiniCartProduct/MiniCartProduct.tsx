import React from "react";

import { MiniCartProductContainer, ImageRemove } from './styles';

type MiniCartProductProps = {
    id: number;
    name: string;
    oldPrice: number;
    price: number;
    image: string;
}

function MiniCartProduct({ id, name, oldPrice, price, image }: MiniCartProductProps) {
    const xVector = require('../../../Assets/x-vector.png');

    const removeCart = () => {
        const currentIds = localStorage.getItem('miniCartProducts')?.split(';');
        
        currentIds?.forEach((currentid, index) => {
            if (currentid == String(id)) {
                currentIds.splice(index, 1);
            }
        })

        localStorage.setItem('miniCartProducts', currentIds?.join(';') + ';')
    }
    
    return(
        <MiniCartProductContainer>
            <img src={image} />
            <div>
                <p>{name}</p>
                <p>R$ {oldPrice.toFixed(2)}</p>
                <p>R$ {price.toFixed(2)}</p>
            </div>
            <ImageRemove onClick={() => removeCart()} src={xVector} />
        </MiniCartProductContainer>
    );
}

export default MiniCartProduct;
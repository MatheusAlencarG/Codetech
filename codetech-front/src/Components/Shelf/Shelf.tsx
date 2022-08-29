import React from "react";

import { ShelfContainer, OldPrice, Price, DiscountPercentage, ShelfContent, DivRating, ShelfImage } from './styles';

type ShelfProps = {
    id: number;
    name: string;
    rating: number;
    oldPrice: number;
    price: number;
    image: string;
    containerWidth?: number;
    withoutMargin?: boolean;
    marginHorizontal?: number;
}

function Shelf({ name, rating, oldPrice, price, image, containerWidth, withoutMargin = false, marginHorizontal = 25, id }: ShelfProps) {
    const ratingImage = require('../../Assets/rating-image.png');

    const addToCart = (productId: number) => {
        const currentProducts = localStorage.getItem('miniCartProducts');
        const _productId = productId + ';'
        localStorage.setItem('miniCartProducts', `${!currentProducts ? _productId : currentProducts + _productId}`)
    }

    const getDiscountPercentage = () => {
        const percentage = 100 - (price / oldPrice * 100);
        return percentage.toFixed(0);
    }

    return(
        <ShelfContainer marginHorizontal={marginHorizontal} withoutMargin={withoutMargin} containerWidth={containerWidth}>
            <div>
                <ShelfImage src={image} />
                <ShelfContent>
                    <h3>{name}</h3>
                    <div>
                        <img src={ratingImage} />
                        <DivRating rating={rating}></DivRating>
                        {rating}
                        </div>
                    <OldPrice>R$ {oldPrice?.toFixed(2)?.toString()?.replaceAll('.', ',')}</OldPrice>
                    <Price>R$ {price?.toFixed(2)?.toString()?.replaceAll('.', ',')}</Price>
                    <button onClick={() => addToCart(id)}>Comprar</button>
                </ShelfContent>
                <DiscountPercentage>
                    {getDiscountPercentage()}% OFF
                </DiscountPercentage>
            </div>
        </ShelfContainer>
    );
}

export default Shelf;
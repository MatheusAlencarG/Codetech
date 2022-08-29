import React, { useEffect, useState, useMemo } from "react";
import AliceCarousel from 'react-alice-carousel';

import api from '../../../services/api';
import Shelf from '../../../Components/Shelf/Shelf';

import { Container } from './styles';
import 'react-alice-carousel/lib/alice-carousel.css';

type EmphasisProducts = {
    id: number;
    name: string;
    rating: number;
    oldPrice: number;
    price: number;
    image: string;
    container: string;
};

function ShelfEmphasis() {
    const [ emphasisProducts, setEmphasisProducts ] = useState<EmphasisProducts[]>([]);
    const isMobile = useMemo(() => {return window.screen.width <= 765}, []);

    const responsive = {
        0: { items: 2 },
        1024: { items: 3 },
        1200: { items: 4 },
    };
    

    useEffect(() => {
        api.get("/emphasis")
        .then(response => {
            if (response.status === 200) {
                setEmphasisProducts(response.data);
            }
        })
        .catch(err => {
            console.error(err);
        })
    }, []);

    function shelfItems() {
        const shelfItems:any[] = []

        emphasisProducts.map((product: EmphasisProducts) => {
            shelfItems.push(
                <Shelf 
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    rating={product.rating}
                    oldPrice={product.oldPrice}
                    price={product.price}
                    image={product.image}
                    marginHorizontal={isMobile ? 5 : 25}
                />

            )
        })

        return shelfItems;
    }

    return(
        <section>
            <Container>
                <h2>PRODUTO EM DESTAQUE</h2>
                <AliceCarousel
                    mouseTracking
                    items={shelfItems()}
                    controlsStrategy="alternate"
                    responsive={responsive}
                    disableDotsControls
                    disableButtonsControls
                />
            </Container>

        </section>
    );
}

export default ShelfEmphasis;

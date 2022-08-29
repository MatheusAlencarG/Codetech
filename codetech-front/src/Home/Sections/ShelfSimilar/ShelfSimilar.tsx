import React, { useEffect, useState } from "react";
import AliceCarousel from 'react-alice-carousel';

import api from '../../../services/api';
import Shelf from '../../../Components/Shelf/Shelf';

import { Container } from './styles';

type SimilarProducts = {
    id: number;
    name: string;
    rating: number;
    oldPrice: number;
    price: number;
    image: string;
    container: string;
};

function ShelfSimilar() {
    const [ similarProducts, setSimilarProducts ] = useState<SimilarProducts[]>([]);

    const responsive = {
        0: { items: 2 },
        1024: { items: 3 },
        1200: { items: 4 },
    };

    useEffect(() => {
        api.get("/similars")
        .then(response => {
            if (response.status === 200) {
                setSimilarProducts(response.data);
            }
        })
        .catch(err => {
            console.error(err);
        })
    }, []);

    function shelfItems() {
        const shelfItems:any[] = []

        similarProducts.map((product: SimilarProducts) => {
            shelfItems.push(
                <Shelf 
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    rating={product.rating}
                    oldPrice={product.oldPrice}
                    price={product.price}
                    image={product.image}
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

export default ShelfSimilar;

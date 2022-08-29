import React, { useEffect, useState, useRef, useMemo } from "react";

import api from '../../../services/api';
import Shelf from '../../../Components/Shelf/Shelf';

import { Container, ButtonContainer, ShelfNewContainer } from './styles';

type NewsProducts = {
    id: number;
    name: string;
    rating: number;
    oldPrice: number;
    price: number;
    image: string;
    container: string;
};

function News() {
    const isMobile = useMemo(() => {return window.screen.width <= 765}, []);
    const [ newsProducts, setNewsProducts ] = useState<NewsProducts[]>([]);
    const buttonRef = useRef(null);
    const [ open, setOpen ] = useState(false);
    const firstNews = newsProducts.filter((product) => product.container === 'FirstNews')
    const openClass = open ? 'open' : ''

    useEffect(() => {
        api.get("/news")
        .then(response => {
            if (response.status === 200) {
                setNewsProducts(response.data);
            }
        })
        .catch(err => {
            console.error(err);
        })
    }, []);

    const toggleContainer = () => {
        setOpen(!open)
    }

    return(
        <section>
            <Container>
                <h2>NOVIDADES</h2>
                <ShelfNewContainer className={openClass} ref={buttonRef}>
                    <Shelf 
                        id={firstNews[0]?.id}
                        name={firstNews[0]?.name} 
                        rating={firstNews[0]?.rating}
                        oldPrice={firstNews[0]?.oldPrice}
                        price={firstNews[0]?.price}
                        image={firstNews[0]?.image}
                        containerWidth={isMobile ? 100 : 50}
                        withoutMargin={isMobile ? true : false}
                    />
                    {newsProducts.map((product) => {
                        if (product.container === 'FirstNews' || isMobile) return;
                        return(
                            <Shelf
                                key={product.id} 
                                id={product.id}
                                name={product.name} 
                                rating={product.rating}
                                oldPrice={product.oldPrice}
                                price={product.price}
                                image={product.image}
                                containerWidth={25}
                            />
                        );
                    })}
                </ShelfNewContainer>
                {!isMobile && <ButtonContainer>
                    <button onClick={() => toggleContainer()}>Veja mais produtos</button>
                </ButtonContainer>}
            </Container>
        </section>
    );
}

export default News;
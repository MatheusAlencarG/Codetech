import React, { useMemo } from "react";
import Header from '../Header/Header';
import PrincipalBanner from './Sections/PrincipalBanner/PrincipalBanner';
import Categories from './Sections/Categories/Categories';
import ShelfEmphasis from './Sections/ShelfEmphasis/ShelfEmphasis';
import TipBar from './Sections/TipBar/TipBar';
import News from './Sections/News/News';
import ShelfSimilar from './Sections/ShelfSimilar/ShelfSimilar';
import Footer from '../Footer/Footer';

import {  } from './styles.js';

function Home() {
    const isMobile = useMemo(() => {return window.screen.width <= 765}, []);

    return(
        <>
            <Header />
            <PrincipalBanner />
            <Categories />
            <ShelfEmphasis />
            {!isMobile && <TipBar />}
            <News />
            {!isMobile && <ShelfSimilar />}
            <Footer />
        </>
    );
}

export default Home;
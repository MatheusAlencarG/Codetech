import React, { useMemo } from "react";

import {
    Container,
    Section,
    ContentOne,
    ContentTwo,
    ImageLogo,
    LinesImage
} from './styles';

function PrincipalBanner() {
    const isMobile = useMemo(() => {return window.screen.width <= 765}, []);

    const principalBannerLaptopImage = require('../../../Assets/principal-banner-image.png');
    const principalBannerLaptopImageMobile = require('../../../Assets/principal-banner-image-mobile.png');
    const principalBannerLineImage = require('../../../Assets/principal-banner-lines.png');
    const principalBannerLineImageMobile = require('../../../Assets/principal-banner-lines-mobile.png');
    const logo = require('../../../Assets/logo.png');

    return(
        <Section>
            <Container>
                {isMobile && <ImageLogo src={logo} />}
                <ContentOne>
                    <p>Conheça a nova linha de tecnologia 6G</p>
                    <button>SAIBA MAIS</button>
                </ContentOne>
                <ContentTwo>
                    <img src={isMobile ? principalBannerLaptopImageMobile : principalBannerLaptopImage} />
                </ContentTwo>
                <LinesImage src={isMobile ? principalBannerLineImageMobile : principalBannerLineImage} />
            </Container>
        </Section>
    );
}

export default PrincipalBanner;

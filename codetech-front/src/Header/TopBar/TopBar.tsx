import React from 'react';

import LinkText from '../../Components/LinkText/LinkText';
import ImageLink from '../../Components/ImageLink/ImageLink';

import { Section, Container } from './styles';

function TopBar() {
    const instagramImage = require('../../Assets/instagram-vector.png');
    const faceImage = require('../../Assets/face-vector.png');

    return(
        <Section>
            <Container>
                <div>
                    <LinkText link="#" text="Institucional" size={14} />
                    <LinkText link="#" text="Contato" size={14} />
                    <ImageLink link="#" src={instagramImage} imageWidth={14} />
                    <ImageLink link="#" src={faceImage} imageWidth={14} />
                </div>
            </Container>
        </Section>
    );
}

export default TopBar;

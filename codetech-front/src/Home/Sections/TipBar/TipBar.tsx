import React from "react";

import TipBarItem from '../../../Components/TipBarItem/TipBarItem';

import { Section, Container } from './styles';

function TipBar() {
    const doubleCard = require('../../../Assets/doubleCard-tipBar.png');
    const barCode = require('../../../Assets/barCode-tipBar.png');
    const pix = require('../../../Assets/pix-tipBar.png');
    const shipping = require('../../../Assets/shipping-tipBar.png');
    const energy = require('../../../Assets/energy-tipBar.png');

    return(
        <Section>
            <Container>
                <TipBarItem src={doubleCard} imageWidth={40} textSize={16} textWeight={700} text="PAGAMENTO COM DOIS CARTÕES" />
                <TipBarItem src={barCode} imageWidth={40} textSize={16} textWeight={700} text="ATÉ 10% OFF NO BOLETO" />
                <TipBarItem src={pix} imageWidth={40} textSize={16} textWeight={700} text="ATÉ 15% OFF NO PIX" />
                <TipBarItem src={shipping} imageWidth={40} textSize={16} textWeight={700} text="FRETE GRÁTIS" />
                <TipBarItem src={energy} imageWidth={40} textSize={16} textWeight={700} text="ENTREGA EXPRESSA" />
            </Container>
        </Section>
    );
}

export default TipBar;

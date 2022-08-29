import React, { useMemo } from "react";

import { Section, Container } from './styles';

function Newsletter() {
    const isMobile = useMemo(() => {return window.screen.width <= 765}, []);
    const logo = require('../../Assets/logo.png');

    return(
        <Section>
            <Container>
                {isMobile && <img src={logo} />}
                <p>
                    Faça parte do clube Codetech e ganhe <br /> <span>10% de desconto</span> na sua primeira compra!
                </p>
                <form action="/">
                    <input placeholder="Digite seu email" type="email" />
                    <button type="submit">Enviar</button>
                </form>
            </Container>
        </Section>
    );
}

export default Newsletter;

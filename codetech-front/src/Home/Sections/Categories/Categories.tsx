import React from "react";

import CategoryItem from '../../../Components/CategoryItem/CategoryItem';

import { Section, Container } from './styles';

function Categories() {
    const phoneCategory = require('../../../Assets/phone-category.png');
    const chargerCategory = require('../../../Assets/charger-category.png');
    const laptopCategory = require('../../../Assets/laptop-category.png');
    const intelligentHouseCategory = require('../../../Assets/intelligent-house-category.png');
    const acessoryCategory = require('../../../Assets/acessory-category.png');
    const televisionCategory = require('../../../Assets/television-category.png');
    const projectorCategory = require('../../../Assets/projector-category.png');
    const cellphoneCategory = require('../../../Assets/cellphone-category.png');

    return(
        <Section>
            <Container>
                <CategoryItem text="Fone de ouvido" link="#" textSize={13} src={phoneCategory} />
                <CategoryItem text="Carregador" link="#" textSize={13} src={chargerCategory} />
                <CategoryItem text="Computador" link="#" textSize={13} src={laptopCategory} />
                <CategoryItem text="Casa Inteligente" link="#" textSize={13} src={intelligentHouseCategory} />
                <CategoryItem text="Acessórios" link="#" textSize={13} src={acessoryCategory} />
                <CategoryItem text="Televisores" link="#" textSize={13} src={televisionCategory} />
                <CategoryItem text="Projetores" link="#" textSize={13} src={projectorCategory} />
                <CategoryItem text="Celulares" link="#" textSize={13} src={cellphoneCategory} />
            </Container>
        </Section>
    );
}

export default Categories;

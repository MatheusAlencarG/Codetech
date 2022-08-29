import styled from 'styled-components';

import { sectionTitle, containerSection } from '../../../mixin';

const Container = styled.div`
    ${containerSection}

    h2 {
        ${sectionTitle}
    }
`;

const ShelfNewContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 40px;
    height: 435px;
    overflow: hidden;

    @media (max-width: 765px) {
        padding: 20px 10px !important;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    padding: 50px;

    button {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), #FFFFFF;
        border-radius: 8px;
        border: none;
        padding: 10px 12px;
        font-weight: 500;
        font-size: 16px;
        color: #130118;
        cursor: pointer;
    }
`;

export {
    Container,
    ShelfNewContainer,
    ButtonContainer
};
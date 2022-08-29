import styled from 'styled-components';

import { containerSection } from '../../../mixin';

const Container = styled.div`
    ${containerSection}
    display: flex;

    @media (max-width: 765px) {
        flex-direction: column;
        align-items: center;
    }

    div {
        @media (min-width: 765px) {
            width: 50%;
            z-index: 2
        }
    }
`;

const ImageLogo = styled.img`
    width: 90px;
    position: absolute;
    top: 80px;
`;

const ContentOne = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 170px;

    @media (max-width: 765px) {
        width: 100%;
        order: 2;
        align-items: center;
        margin-bottom: 60px;
        margin-top: 30px;
    }

    p {
        font-size: 57px;
        font-weight: 900;
        color: #fff;
        margin: 0;
        margin-top: 100px;

        @media (max-width: 765px) {
            font-size: 28px;
            text-align: center;
            margin-top: 0;
        }
    }

    button {
        background: linear-gradient(135deg, #9A4DFF 0%, #F600DD 100%);
        border-radius: 12px;
        padding: 13px 89px;
        width: fit-content;
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        margin-top: 30px;
        cursor: pointer;
    } 
`;

const ContentTwo = styled.div`
    position: relative;

    @media (max-width: 765px) {
        order: 1;
        width: 100%;
        margin-top: 60px;
    }

    img {
        position: absolute;
        bottom: -40px;
        width: 650px;
        z-index: 3;

        @media (max-width: 765px) {
            position: inherit;
            width: 100%;
        }
    }
`;

const Section = styled.section`
    position: relative;
    background: linear-gradient(0deg, var(--dark-purple) 0%, var(--black) 100%);
`;

const LinesImage = styled.img`
    position: absolute;
    width: 100%;
    left: 0;
    bottom: -45px;

    @media (max-width: 765px) {
        top: calc(52% - 130px);
    }
`;

export {
    Container,
    Section,
    ContentOne,
    ContentTwo,
    ImageLogo,
    LinesImage
};
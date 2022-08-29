import styled from 'styled-components';

import { containerSection } from '../mixin';

const Section = styled.div`
    background-color: var(--dark-black);
    
    @media (max-width: 765px) {
        background-color: var(--black-gray);
        margin-bottom: 66px;
    }
`;

const Container = styled.div`
    ${containerSection}
    padding-top: 70px;

    div:nth-child(1) {
        display: flex;
        justify-content: space-between;

        @media (max-width: 765px) {
            flex-direction: column;
        }
    }

    div:nth-child(5) {
        div {
            @media (max-width: 765px) {
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
    
                img {
                    width: 40px;
                }
            }
        }
    }

    div:nth-child(6) {
        div {
            @media (max-width: 765px) {
                display: flex;
                flex-direction: row;
            }
        }
    }
`;

const ContentSocialMedia = styled.div`
    flex-direction: row !important;
    justify-content: center !important;
    padding: 20px;
    gap: 20px;
`;

const FooterImages = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 30px;
    margin: 35px 0;

    img:first-child {
        width: 55px;
    }

    img:last-child {
        width: 120px;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 18px;
    color: var(--white);
    gap: 15px;
    font-weight: 700;

    @media (max-width: 765px) {
        font-size: 14px;
        padding: 30px 0;
        border-top: solid 1px #4F4F4F;
    }

    > div {
        display: flex;
        gap: 10px;
    }
`;

const Copyright = styled.div`
    border-top: solid 1px #4F4F4F;;

    p {
        padding: 40px;
        margin: 0;
        color: var(--white);
        text-align: center;

        @media (max-width: 765px) {
            font-size: 12px;
        }
    }
`;

export {
    Section,
    Container,
    Content,
    FooterImages,
    Copyright,
    ContentSocialMedia
};
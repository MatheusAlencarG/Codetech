import styled from 'styled-components';

import { containerSection } from '../../mixin';

const Section = styled.section`
    background-color: var(--ligth-black);
`;

const Container = styled.div`
    ${containerSection}
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 65px 0;

    > img {
        width: 100px;
        margin-bottom: 30px;
    }

    @media (max-width: 765px) {
        flex-direction: column;
    }

    p {
        width: 50%;
        font-size: 20px;
        font-weight: 400;
        color: var(--white);
        text-align: center;
        margin: 0;

        @media (max-width: 765px) {
            width: 100%;
            font-size: 16px;
            margin-bottom: 40px;
        }

        span {
            font-weight: 800;
        }
    }

    form {
        width: 50%;
        
        @media (max-width: 765px) {
            width: 100%;   
        }
        
        input {
            width: 76%;
            color: #9E8888;
            font-size: 16px;
            font-weight: 400;
            padding: 10px;
            border-radius: 12px 0 0 12px;
            border: none;

            @media (max-width: 765px) {
                width: calc(100% - 20px);
                border-radius: 6px;
            }
        }

        button {
            width: 20%;
            border: none;
            padding: 12px;
            color: var(--white);
            background-color: var(--blue);
            border-radius: 0px 12px 12px 0px;

            @media (max-width: 765px) {
                width: 100%;
                border-radius: 6px;
                margin-top: 15px;
            }
        }
    }
    
`;

export {
    Section,
    Container
};
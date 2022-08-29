import styled from 'styled-components';

const MiniCartProductContainer = styled.div`
    display: flex;
    align-items: center;
    
    img {
        width: 100px;
        height: fit-content;
    }

    div {
        padding: 15px;
        padding-right: 40px;

        p {
            margin: 0;
        
            &:nth-child(2) {
                margin-top: 10px;
                font-weight: 500;
                font-size: 14px;
                text-decoration-line: line-through;
                color: #868781;
            }

            &:nth-child(3) {
                font-weight: 600;
                font-size: 16px;
            }
        }
    }
`;

const ImageRemove = styled.img`
    position: absolute;
    width: 20px !important;
    right: 15px;
    cursor: pointer;
`;

export {
    MiniCartProductContainer,
    ImageRemove
}
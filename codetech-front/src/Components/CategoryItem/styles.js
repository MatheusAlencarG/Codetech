import styled from 'styled-components';

const CategoryItemContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => {
        if (!props.textColor) return 'var(--white)'
        return `${props.textColor}`;
    }};
    font-size: ${props => {
        if (!props.textSize) return '14px'
        return `${props.textSize}px`;
    }};

    div {
        width: 100px;
        height: 100px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(180deg, rgba(110, 118, 71, 0.17) 11.46%, #2F2F2D 100%);
        border: 3.47329px solid #C706FF;
        box-shadow: 0px 0px 8.68322px 0.868322px #c706ff;
        border-radius: 50%;
    
        img {
            position: relative;
            top: -10px;
            width: 120px;
        }
    }
`;

export {
    CategoryItemContent
};
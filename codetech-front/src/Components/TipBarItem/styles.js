import styled from 'styled-components';

const TipBarItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 7px;

    img {
        width: ${props => {
            if (!props.imageWidth) return 'auto';
            if (typeof props.imageWidth === 'number') return `${props.imageWidth}px`;
            return `${props.imageWidth}`;
        }};
        height: ${props => {
            if (!props.imageHeight) return 'auto';
            if (typeof props.imageHeight === 'number') return `${props.imageHeight}px`;
            return `${props.imageHeight}`;
        }};;
    }

    p {
        font-size: ${props => {
            if (!props.textSize) return `12px`;
            return `${props.textSize}px`;
        }};
        font-weight: ${props => {
            if (!props.textWeight) return '500'
            return `${props.textWeight}`;
        }};
    }
`;

export {
    TipBarItemContainer
};
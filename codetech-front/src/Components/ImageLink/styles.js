import styled from 'styled-components';

const Link = styled.a`

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
        }};
    }
`;

export {
    Link
};
import styled from 'styled-components';

const Link = styled.a`
    font-size: ${props => {
        if (!props.size) return `12px`;
        return `${props.size}px`;
    }};
    color: ${props => {
        if (!props.color) return 'var(--white)'
        return `${props.color}`;
    }};
    font-weight: ${props => {
        if (!props.weight) return '500'
        return `${props.weight}`;
    }};
`;

export {
    Link
};
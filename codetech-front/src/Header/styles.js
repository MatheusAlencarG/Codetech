import styled from 'styled-components';

import { containerSection } from '../mixin';

const Container = styled.div`
    ${containerSection}
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;

    ul {
        color: var(--white);
        list-style-type: none;
        display: flex;
        padding: 0;
        margin: 0;
        gap: 60px;

        li:last-child {
            color: var(--ligth-purple);
        }
    }

    div {
        display: flex;
        gap: 40px;
    }
`;

const HeaderComponent = styled.header`
    background-color: var(--black);
    border-top: solid 1px var(--purple);
    padding: 11px 0;
`;

export {
    Container,
    HeaderComponent
}
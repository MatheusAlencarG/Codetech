import styled from 'styled-components';

import { containerSection } from '../../../mixin';

const Section = styled.section`
    background-color: var(--dark-purple-plus);
`;

const Container = styled.div`
    ${containerSection}
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 60px 0;

    @media (max-width: 765px) {
        overflow: auto;
        gap: 25px;
    }
`;

export {
    Section,
    Container
};
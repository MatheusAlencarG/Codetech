import styled from 'styled-components';

import { containerSection } from '../../mixin';

const Section = styled.section`
    background-color: var(--black);
`;

const Container = styled.div`
    ${containerSection}
    padding: 14px 0;

    div {
        display: flex;
        justify-content: end;
        gap: 30px;
    }
`;

export {
    Section,
    Container
}
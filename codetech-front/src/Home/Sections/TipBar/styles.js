import styled from 'styled-components';

import { containerSection } from '../../../mixin';

const Section = styled.div`
    background-color: var(--gray)
`;

const Container = styled.div`
    ${containerSection}
    display: flex;
    justify-content: space-between;
    padding: 65px 0;
`;

export {
    Section,
    Container
};
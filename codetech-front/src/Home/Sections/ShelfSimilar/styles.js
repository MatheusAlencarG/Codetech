import styled from 'styled-components';

import { sectionTitle, containerSection } from '../../../mixin';

const Container = styled.div`
    ${containerSection}
    margin-bottom: 75px;

    h2 {
        ${sectionTitle}
    }
`;

export {
    Container
};
import styled from 'styled-components';

const SearchBarContainer = styled.div`
    position: absolute;
    display: flex;
    justify-content: center;
    z-index: 3;
    top: 20px;
    width: 100vw;
    
    input {
        border: none;
        border-radius: 20px;
        width: 80vw;
        padding: 10px;
    }

    img {
        position: absolute;
        z-index: 4;
        top: 6px;
        right: calc(10vw + 5px);
        width: 22px;
    }
`;

export {
    SearchBarContainer
}
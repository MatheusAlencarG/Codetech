import styled from 'styled-components';

const BottomNavigationContainer = styled.div`
    position: fixed;
    width: calc(100vw - 2px);
    z-index: 4;
    display: flex;
    justify-content: space-between;
    background: #130118;
    box-shadow: 0px -6px 12px rgb(19 19 19 / 35%);
    border: 1px solid;
    border-image-source: linear-gradient(135deg, #12002B 0%, #A30E93 100%);
    bottom: 0px;
    border-radius: 15px 15px 0 0;

    img {
        height: 22px;
        padding: 25px;
    }
`;

export {
    BottomNavigationContainer
};
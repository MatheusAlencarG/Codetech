import styled from 'styled-components';

const Container = styled.div`
    transition: 1s;
    padding: 30px;
    z-index: 10;
    background-color: #130118;
    position: fixed;
    width: calc(100% - 60px);
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    bottom: -100vh;
`;

const ContentSideMenu = styled.div`
    gap: 20px;
    display: flex;
    flex-direction: column;

    &:first-child {
        display: flex;
        align-items: end;
        margin-bottom: 25px;

        img {
            width: 20px;
        }
    }

    &:nth-child(2) {
        padding-bottom: 40px;
    }

    &:nth-child(3) {
        color: var(--white);
        padding-top: 40px;
        border-top: 1px solid #AE16D7;
    
        p {
            margin: 0;
        }
    }

    &:nth-child(4) {
        flex-direction: row;
    }
`;

const DepartamentMenu = styled.div`
    color: var(--white);
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    img {
        height: 20px;
    }
`;

export {
    Container,
    ContentSideMenu,
    DepartamentMenu
};
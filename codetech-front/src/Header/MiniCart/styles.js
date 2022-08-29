import styled from 'styled-components';

const Section = styled.section`
    position: fixed;
    z-index: 10;
    background-color: #130118;
    color: var(--white);
    top: 0;
    right: -500px;
    height: calc(100vh - 40px);
    padding: 20px 0 20px 20px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30vw;
    transition: 1s;
`;

const ProductsContainer = styled.div`
    height: 60%;
    overflow-y: auto;
`;

const TotalPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding-top: 20px;
    margin-right: 20px;
    border-top: solid 1px var(--purple);

    p {
        margin: 0;
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    margin-right: 20px;

    &:nth-child(1) {
        border-bottom: solid 1px var(--purple);
    }

    h3 {
    }

    button {
        background: linear-gradient(135deg,#9A4DFF 0%,#F600DD 100%);
        border-radius: 12px;
        padding: 13px 89px;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        color: #fff;
        font-size: 14px;
        font-weight: 700;
        margin-top: 30px;
        cursor: pointer;
    }
`;

const ImageClose = styled.img`
    width: 20px;
    position: absolute;
    right: 25px;
    cursor: pointer;
`;

export {
    Section,
    ProductsContainer,
    TotalPriceContainer,
    Content,
    ImageClose
}
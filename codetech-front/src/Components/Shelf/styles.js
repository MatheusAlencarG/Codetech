import styled from 'styled-components';

const ShelfContainer = styled.div`
    background: #EFF4F5;
    box-shadow: 0px 4px 20px rgb(0 0 0 / 30%);
    border-radius: 10px;
    margin: 0 25px !important;
    width: ${props => {
        if (!props.containerWidth) return 'auto';
        if (props.withoutMargin) return `${props.containerWidth}%`;
        return `calc(${props.containerWidth}% - 50px);`;
    }};

    @media (max-width: 765px) {
        margin: ${props => {
            if (props.withoutMargin) return '0 !important'
            return `0 ${props.marginHorizontal}px !important`;
        }};
    }

    > div {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px;

        p {
            margin: 0;
        }

        > img {
            width: 250px;
            min-height: 212px;
        }

        h3 {
            margin: 0;
            font-size: 14px;
            font-weight: 500;
            color: var(--dark-black);

            @media (max-width: 765px) {
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                overflow: hidden;
            }
        }

        button {
            width: 100%;
            background: linear-gradient(135deg, #3D033B 0%, #A30E93 100%);
            border-radius: 4px;
            color: var(--white);
            padding: 10px 0;
            border: none;
            cursor: pointer;
        }
    }

`;

const ShelfContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    > div {
        position: relative;
        margin-bottom: 10px;
        display: flex;
        width: 150px;

        img {
            z-index: 2;
            width: 100px;
        }
    }
`;

const ShelfImage = styled.img`
    @media (max-width: 765px) {
        width: 100% !important;
        min-height: 112px !important;
    }
`;

const DivRating = styled.div`
    position: absolute;
    height: 100%;
    z-index: 1;
    background-color: #ffb800;
    width: ${props => {
            const rating = props.rating * 20;
            return `${rating}px`;
        }};
`;

const OldPrice = styled.p`
    font-weight: 500;
    font-size: 14px;
    text-decoration-line: line-through;
    color: #868781;
`;

const Price = styled.p`

    font-weight: 600;
    font-size: 16px;
    color: #0A0A0A;
`;

const DiscountPercentage = styled.div`
    position: absolute;
    background: #F1F1F1;
    border: 1px solid #9154BB;
    border-radius: 8px;
    font-weight: 700;
    font-size: 8px;
    color: #9154BB;
    padding: 2px 7px;
    left: 14px;
`;

export {
    ShelfContainer,
    OldPrice,
    Price,
    DiscountPercentage,
    ShelfContent,
    DivRating,
    ShelfImage
};
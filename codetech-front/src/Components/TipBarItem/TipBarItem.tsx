import React from "react";

import { TipBarItemContainer } from './styles';

type TipBarItemProps = {
    src: string;
    alt?: string;
    text: string;
    imageWidth?: number | string;
    imageHeight?: number | string;
    textSize?: number;
    textWeight?: number;
}

function TipBarItem({ 
    src, 
    alt, 
    text, 
    imageWidth, 
    imageHeight, 
    textSize, 
    textWeight 
}: TipBarItemProps) {
    return(
        <TipBarItemContainer 
            imageWidth={imageWidth} 
            imageHeight={imageHeight} 
            textSize={textSize} 
            textWeight={textWeight}
        >
            <img src={src} alt={alt} />
            <p>{text}</p>
        </TipBarItemContainer>
    );
}

export default TipBarItem;
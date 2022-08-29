import React from "react";

import { CategoryItemContent } from './styles';

type CategoryItemProps = {
    text: string;
    link: string;
    src: string;
    alt?: string;
    textColor?: string;
    textSize?: number;
};

function CategoryItem({ text, link, src, alt, textColor, textSize }: CategoryItemProps) {
    return(
        <a href={link}>
            <CategoryItemContent textColor={textColor} textSize={textSize}>
                <div>
                    <img src={src} alt={alt} />
                </div>
                <p>{text}</p>
            </CategoryItemContent>
        </a>
    );
}

export default CategoryItem;

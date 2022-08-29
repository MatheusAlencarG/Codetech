import React from "react";

import { Link } from './styles';

type LinkTextProps = {
    text: string;
    link: string;
    size?: number;
    color?: string;
    weight?: number;
};

function LinkText({ text, link, size, color, weight }: LinkTextProps) {
    return(
        <Link href={link} size={size} color={color} weight={weight}>
            {text}
        </Link>
    );
}

export default LinkText;

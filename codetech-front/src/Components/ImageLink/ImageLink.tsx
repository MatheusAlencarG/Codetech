import React from "react";

import { Link } from './styles';

type ImageLinkProps = {
    link: string;
    src: string;
    alt?: string;
    imageWidth?: number | string;
    imageHeight?: number | string;
}

function ImageLink({ link, src, alt, imageWidth, imageHeight }: ImageLinkProps) {
    return(
        <Link href={link} imageWidth={imageWidth} imageHeight={imageHeight}>
            <img src={src} alt={alt} />
        </Link>
    );
}

export default ImageLink;
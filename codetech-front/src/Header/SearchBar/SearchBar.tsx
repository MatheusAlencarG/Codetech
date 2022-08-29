import React from "react";

import { SearchBarContainer } from './styles';

function SearchBar() {
    const loupImage = require('../../Assets/loup-vector-black.png');

    return(
        <SearchBarContainer>
            <input type="text" placeholder="O que você procura?" />
            <img src={loupImage} />
        </SearchBarContainer>
    );
}

export default SearchBar;
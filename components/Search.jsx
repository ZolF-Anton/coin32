import styled from 'styled-components';

import { IoSearch } from 'react-icons/io5';

//import { useState } from 'react';
import useDebounceLite from '../hooks/useDebounceLite';
import { useEffect } from 'react';

const InputContainer = styled.label`
    background-color: whitesmoke;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;

    border-radius: 0.5rem;
    box-shadow: hsla(210, 8%, 62%, 0.2) 0px 8px 24px;
    width: 100%;
    margin-bottom: 1rem;

    @media (min-width: 767px) {
        margin-bottom: 0;
        width: 280px;
    }
`;

const Input = styled.input.attrs({
    type: 'search',
    placeholder: 'Search for a game...',
})`
    margin-left: 2rem;
    border: none;
    outline: none;
    color: darkslategrey;
    background-color: whitesmoke;
`;

export const Search = ({ setText, text }) => {
    //const dispatch = useDispatch();

    const debounceSearch = useDebounceLite(text, 1300);

    const handleSearch = (e) => {
        setText(e.target.value);
    };

    useEffect(() => {
        console.log('text', text);
    }, [debounceSearch]);
    return (
        <InputContainer>
            <IoSearch />
            <Input onChange={handleSearch} value={text} onLoad={(e) => onLoadLog(e)} />
        </InputContainer>
    );
};

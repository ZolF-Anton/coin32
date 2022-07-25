import styled from 'styled-components';

import { IoSearch } from 'react-icons/io5';

//import { useState } from 'react';
import useDebounceLite from '../hooks/useDebounceLite';
import { useEffect, useState } from 'react';
import { Dropdown } from './mini/Dropdown';
import { DropdownOrder } from './mini/DropdownOrder';

const InputContainer = styled.label`
    background-color: whitesmoke;
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.5rem;
    box-shadow: hsla(210, 8%, 62%, 0.2) 0px 8px 24px;
    width: 85%;

    margin: 1rem auto;

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
    width: 75%;
`;
const data = [
    { id: 0, label: 'Istanbul, TR (AHL)' },
    { id: 1, label: 'Paris, FR (CDG)' },
];

export const Search = ({ setText, setFilters, setOrdering }) => {
    const [search, setSearch] = useState('');

    const debounceSearch = useDebounceLite(search, 1300);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        //setText(e.target[0].value);
        setSearch(e.target[0].value);
        console.log(e.target[0].value);
    };

    useEffect(() => {
        setText(search);
    }, [debounceSearch]);
    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <InputContainer>
                <IoSearch />
                <Input onChange={handleSearch} value={search} />
            </InputContainer>
            <Dropdown setFilters={setFilters}></Dropdown>
            <DropdownOrder setOrdering={setOrdering}></DropdownOrder>
        </form>
    );
};

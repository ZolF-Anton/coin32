import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

const dataLocal = [
    {
        id: `-name`,
        name: 'Order Z-a',
        slug: 'pc',
    },
    {
        id: `name`,
        name: 'Order A-z',
        slug: 'pc',
    },
    {
        id: `-released`,
        name: 'New release',
        slug: 'pc',
    },
    {
        id: `released`,
        name: 'Old first',
        slug: 'pc',
    },
];

const DropdownWrap = styled.div`
    width: 300px;
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    background-color: white;
    width: 85%;
    margin: 1rem auto;
    @media screen and (min-width: 430px) {
        width: 350px;
    }
`;
const DropdownHeader = styled.div`
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.5rem;
    box-shadow: hsla(210, 8%, 62%, 0.2) 0px 8px 24px;
`;
const DropdownBody = styled.div`
    padding: 5px;
    border-top: 1px solid #e5e8ec;
    display: ${(props) => (props.block ? 'block' : 'none')};
    position: absolute;
    background-color: whitesmoke;
    /* border-radius: 0.5rem;
    box-shadow: hsla(210, 8%, 62%, 0.2) 0px 8px 24px; */
    width: 85%;
    margin-bottom: 0.3rem;
    z-index: 5;
`;
const DropItem = styled.div`
    padding: 10px;
    &:hover {
        cursor: pointer;
        background-color: #e3eaef;
    }
`;

const DropIcon = styled.i`
    font-size: 13px;
    color: #91a5be;
    transform: rotate(0deg);
    transition: all 0.2s ease-in-out;
`;
const DropItemDot = styled.span`
    //opacity: ${(props) => props.opacity};
    color: #91a5be;
    transition: all 0.2s ease-in-out;
`;

export const DropdownOrder = ({ setOrdering }) => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState(dataLocal);
    const [selectedItem, setSelectedItem] = useState(null);

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);

        toggleDropdown();
    };

    useEffect(() => {
        setOrdering(selectedItem);
    }, [selectedItem]);

    return (
        <DropdownWrap>
            <DropdownHeader onClick={toggleDropdown}>
                {selectedItem
                    ? items.find((item) => item.id == selectedItem).name
                    : 'Select order type'}
                <DropIcon>{isOpen ? <FaChevronRight /> : <FaChevronDown />}</DropIcon>
            </DropdownHeader>
            <DropdownBody block={isOpen}>
                <DropItem onClick={() => handleItemClick(0)}>All</DropItem>
                {items.map((item) => (
                    <DropItem
                        key={item.id}
                        onClick={(e) => handleItemClick(e.target.id)}
                        id={item.id}
                    >
                        <DropItemDot opacity={item.id == selectedItem ? 1 : 0}>• </DropItemDot>
                        {item.name}
                    </DropItem>
                ))}
            </DropdownBody>
        </DropdownWrap>
    );
};

import React, { useState, useEffect } from 'react';
import { FaChevronCircleUp } from 'react-icons/fa';
import styled from 'styled-components';

const Chevron = styled.div`
    display: flex;
    background-color: #e6f6fc;

    border-radius: 90%;
    position: fixed;
    bottom: 45px;
    right: 15px;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 25;
`;

export const Scroll2top = () => {
    const [hide, setHide] = useState(true);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 770) {
                setHide(false);
            } else {
                setHide(true);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: `smooth` });
    };
    return (
        <>
            {!hide && (
                <Chevron onClick={handleClick}>
                    <FaChevronCircleUp color={'#96a3ae'} size={'3em'} />
                </Chevron>
            )}
        </>
    );
};

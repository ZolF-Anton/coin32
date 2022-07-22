import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import A from '../components/A';
import MainContainer from '../components/MainContainer';

const Navbar = styled.nav`
    background: blueviolet;
    padding: 15px;
    color: #fff;
    text-decoration: none;
`;

const LinkA = styled.a`
    color: wheat;
    text-decoration: none;
    padding: 15px;
    cursor: pointer;
`;

const Users = ({ usersPros }) => {
    return (
        <MainContainer>
            <h1>USER PAGE</h1>
            <ul>
                {usersPros.map((user) => (
                    <li key={user.id}>
                        <Link href={`/users/${user.id}`}>
                            <a>{user.name}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    //console.log('context', context);
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const usersPros = await response.json();

    return {
        props: { usersPros }, // will be passed to the page component as props
    };
}

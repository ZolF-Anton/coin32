import React from 'react';
import A from './A';
import Head from 'next/head';
import styled from 'styled-components';

const Navbar = styled.nav`
    background: blueviolet;
    padding: 15px;
    color: #fff;
    text-decoration: none;
    z-index: 30;
    position: relative;
`;
const MainContainer = ({ children, keywords }) => {
    return (
        <>
            <Head>
                <meta keywords={`games, rawg, ssr, ${keywords}`}></meta>
                <title>Main Game Page</title>
            </Head>
            <Navbar>
                <A text={'Main'} href={'/'} />
                <A text={'Users'} href={'/users'} />
                <A text={'Games'} href={'/games'} />
            </Navbar>
            <div>{children}</div>
        </>
    );
};

export default MainContainer;

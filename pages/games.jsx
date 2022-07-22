import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import A from '../components/A';
import MainContainer from '../components/MainContainer';
import { Search } from '../components/Search';
import GameItem from '../components/GameItem';

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
const GameList = styled.div`
    display: grid;
    //grid-template-columns: repeat(auto-fill, minmax(310px, 1fr));
    grid-template-columns: repeat(auto-fill, minmax(300px, 375px));
    grid-template-rows: repeat(auto-fill, minmax(500px, 500px));
    gap: 1rem;
    justify-content: center;
    justify-items: center;
`;

const Games = ({ gamesPros }) => {
    console.log('gamesPros.results:', gamesPros.results);
    const [text, setText] = useState('Fable');

    return (
        <MainContainer>
            <h1>GAMES</h1>
            <Search text={text} setText={setText} />

            <GameList>
                {gamesPros.results.map((game) => (
                    <GameItem key={game.id} {...game} />
                ))}
            </GameList>
        </MainContainer>
    );
};

export default Games;

export async function getStaticProps(context) {
    const response = await fetch(
        `https://rawg.io/api/games/lists/main?discover=true&ordering=-relevance&page_size=16&page=1&key=fcc863d352c344f68b3271b8be5ecb6b`
    );
    const gamesPros = await response.json();
    console.log('context', context);
    return {
        props: { gamesPros }, // will be passed to the page component as props
    };
}

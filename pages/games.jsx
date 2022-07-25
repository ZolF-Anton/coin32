import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import A from '../components/A';
import MainContainer from '../components/MainContainer';
import { Search } from '../components/Search';
import GameItem from '../components/GameItem';
import { useIntersect } from '../hooks/useIntersect';
import { BiLoader } from 'react-icons/bi';
import { Scroll2top } from '../components/mini/scroll2top';

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
    grid-template-rows: repeat(auto-fill, minmax(500px, 515px));
    gap: 1rem;
    justify-content: center;
    justify-items: center;
`;
const rotateAnim = keyframes`
    0% {transform: rotateZ(0deg);}
    100% {transform: rotateZ(360deg);}
`;

const PaginationWrap = styled.div`
    display: flex;
    width: 55px;
    height: 55px;
    margin: 1rem auto;
    background-color: #30455a;
    box-shadow: 0 8px 24px #959da533;
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    animation: ${rotateAnim} 2s infinite 100ms linear;
`;

const H1_games = styled.h1`
    font-size: 2.7rem;
    text-align: center;
`;

const Games = ({ gamesPros }) => {
    const [text, setText] = useState('');
    const [data, setData] = useState(gamesPros.results);
    const [nextPage, setNextPage] = useState(gamesPros.next);

    const [filters, setFilters] = useState('');
    const [ordering, setOrdering] = useState('');
    const [ref, entry] = useIntersect({
        threshold: 0.1,
    });

    const smartLink = `https://api.rawg.io/api/games?key=fcc863d352c344f68b3271b8be5ecb6b&filter=true&page=1&page_size=10&search=`;

    let filtPlatform = `${filters ? `&parent_platforms=${filters}` : ''}`;
    let filtOrder = `${ordering ? `&ordering=${ordering}` : ''}`;
    let searchLink = `${smartLink}${text}${filtPlatform}${filtOrder}`;

    useEffect(() => {
        (async () => {
            const resp = await fetch(nextPage);
            const fetchData = await resp.json();
            if (fetchData.next) setData([...data, ...fetchData.results]);
            setNextPage(fetchData.next);
        })();
    }, [entry.isIntersecting]);

    useEffect(() => {
        if (text) {
            (async () => {
                const resp = await fetch(searchLink);
                const fetchData = await resp.json();
                setData(fetchData.results);
                console.log('##############  searchLink', searchLink);
                console.log('############## filtPlatform', filtPlatform);
                console.log('##############  filtOrder', filtOrder);
            })();
        } else setData(gamesPros.results);
    }, [text, filters, ordering]);

    return (
        <MainContainer>
            <H1_games>{text ? 'Find your Game' : 'New and trending Games'}</H1_games>
            <Search setText={setText} setFilters={setFilters} setOrdering={setOrdering} />

            <GameList>
                {data.map((game) => (
                    <GameItem key={game.id} {...game} />
                ))}
                <Scroll2top />
            </GameList>
            <PaginationWrap ref={ref}>
                {nextPage ? <BiLoader color={'#e60'} size={'4em'} /> : "That's all"}
            </PaginationWrap>
        </MainContainer>
    );
};

export async function getStaticProps(context) {
    const response = await fetch(
        `https://rawg.io/api/games/lists/main?discover=true&ordering=-relevance&page_size=16&page=1&key=${process.env.API_KEY}`
    );
    const gamesPros = await response.json();

    return {
        props: { gamesPros }, // will be passed to the page component as props
    };
}

export default Games;

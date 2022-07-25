import Link from 'next/link';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import A from '../components/A';
import MainContainer from '../components/MainContainer';
import { Search } from '../components/Search';
import GameItem from '../components/GameItem';
import { useIntersect } from '../hooks/useIntersect';

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

const PaginationWrap = styled.div`
    width: 50%;
    height: 67px;
    margin: 3rem auto;
    background-color: #30455a;
    box-shadow: 0 8px 24px #959da533;
    border-radius: 5rem;
    padding: 2rem 5rem;
`;

let LinkArr = [
    'https://rawg.io/api/games?search=',
    'driver',
    '&parent_platforms=',
    '1',
    '&ordering=',
    '-name',
    '&page=1&page_size=20&',
    'filter=true',
    '&key=c542e67aec3a4340908f9de9e86038af',
];

const searchTools = {
    test1: `https://rawg.io/api/games?search=driver&parent_platforms=1&ordering=-name&page=1&page_size=20&filter=true&key=c542e67aec3a4340908f9de9e86038af`,

    test: 'https://api.rawg.io/api/games?filter=true&key=c542e67aec3a4340908f9de9e86038af&page=1&page_size=20&search=driver&parent_platforms=1&ordering=-name',

    test2: 'https://api.rawg.io/api/games?key=fcc863d352c344f68b3271b8be5ecb6b&filter=true&page=1&page_size=10&search=spider',

    link: 'https://rawg.io/api/games',
    linkSearch: 'https://rawg.io/api/games?search=',
    linkList: 'https://rawg.io/api/games/lists/',
    options: {
        parent_platform: null,
        sort_name: 'name',
        sort_released: '-released',
    },
};

// let b = `${searchTools.link}search=${text}&page=1&page_size=5&key=fcc863d352c344f68b3271b8be5ecb6b`;

const Games = ({ gamesPros }) => {
    const [text, setText] = useState('');
    const [data, setData] = useState(gamesPros.results);
    const [nextPage, setNextPage] = useState(gamesPros.next);

    const [filters, setFilters] = useState('');
    const [ordering, setOrdering] = useState('');
    const [ref, entry] = useIntersect({
        threshold: 0.1,
    });
    let searchLink = '';
    const smartLink = `https://api.rawg.io/api/games?key=fcc863d352c344f68b3271b8be5ecb6b&filter=true&page=1&page_size=10&search=`;

    // const urlBuilder = (search, parent_platform, ordering) => {
    //     setSearchLink(
    //         `${smartLink}${search}${parent_platform && `&parent_platforms=${parent_platform}`}${
    //             ordering && `&ordering${ordering}`
    //         }}`
    //     );
    // };

    useEffect(() => {
        //urlBuilder(text, filters[0], filters[1])();
        searchLink = `${smartLink}${text}${filters[0] && `&parent_platforms=${filters}`}${
            ordering && `&ordering=${ordering}`
        }}`;
    }, [text, filters]);

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
                //const resp = await fetch(`${smartLink}${text}`);
                const resp = await fetch(searchLink);
                const fetchData = await resp.json();
                setData(fetchData.results);
            })();
        } else setData(gamesPros.results);
    }, [text]);

    return (
        <MainContainer>
            <h1>GAMES</h1>
            <Search setText={setText} setFilters={setFilters} setOrdering={setOrdering} />

            <GameList>
                {data.map((game) => (
                    <GameItem key={game.id} {...game} />
                ))}
            </GameList>
            <PaginationWrap ref={ref}>{nextPage ? '...loading' : "That's all"}</PaginationWrap>
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

import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const GameSlider = styled.div`
    width: 75%;
    height: 50%;
`;
const GameName = styled.div`
    width: auto;
    height: auto;
`;
const GameReleasedDate = styled.div`
    width: auto;
    height: auto;
`;

export default function Game({ game }) {
    // const router = useRouter();
    // console.log('router:', router);
    console.log('####################game', game);
    return (
        <>
            <div className='GameWrap'>
                <div className='GameMainIfo'>
                    <GameName>{game.name}</GameName>
                </div>
                <GameReleasedDate>{game.released ? game.released : 'Coming soon'}</GameReleasedDate>
                <div className='GameAbout'>{game.description}</div>
                <GameSlider></GameSlider>
            </div>
        </>
    );
}

export async function getServerSideProps({ params }) {
    console.log('###################GAMEcontext:', params.game);
    const response = await fetch(
        `https://rawg.io/api/games/${params.game}?key=c542e67aec3a4340908f9de9e86038af`
    );
    const game = await response.json();

    return {
        props: { game }, // will be passed to the page component as props
    };
}

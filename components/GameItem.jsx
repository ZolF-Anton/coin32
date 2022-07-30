import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { GameTag } from './mini/GameTag';
import { PlatformType } from './mini/PlatformType';
import blackHole from '../images/blackhole.svg';

const GameCard = styled.div`
    background: rgb(227 234 239);
    width: 350px;
    color: #30455a;
    overflow: hidden;
    border: 1px solid hsl(216deg 25% 30%);
    border-radius: 6px;
    padding: 16px;
    z-index: 3;
    box-shadow: 0 8px 24px #959da533;
    transition: left 0.2s ease-out, top 0.2s ease-out;
    contain: layout paint;
`;
const Game_buttons = styled.div`
    display: flex;
    flex-wrap: wrap;
`;
const Game_a_store = styled.a`
    text-decoration: none;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;
    color: #273b4b;
    background: #fff;
    padding: 0 5px;
    font-size: 12px;
    border-radius: 5px;
    flex: 1 0 0;
    text-align: center;
    flex-basis: auto;
    flex-grow: 0;
`;
const Game_a = styled.div`
    text-decoration: none;
    display: inline-block;
    margin-right: 5px;
    margin-bottom: 5px;
    cursor: pointer;
    color: #273b4b;
    background: #fff;
    padding: 0 5px;
    font-size: 12px;
    border-radius: 5px;
    flex: 1 0 0;
    text-align: center;
`;
const Game_title = styled.a`
    text-decoration: none;
    min-height: 2.9rem;
    color: #222d3d;
    font-size: 20px;
    margin-bottom: 6px;
    display: block;
    overflow: hidden;
    cursor: pointer;
`;
const Game_image = styled.div`
    cursor: pointer;
    position: relative;
    display: block;
    background: #1c2937;
    width: 100%;
    min-height: 152px;
    border-radius: 5px;
    aspect-ratio: 16 / 9;
    margin-bottom: 10px;
`;
const Game_meta = styled.div`
    margin-bottom: 6px;
    font-size: 15px;
    line-height: 1;
`;
const Game_tag_row = styled.div`
    display: flex;
    gap: 0.2rem;
    position: relative;
    overflow: hidden;
    line-height: 1;
    white-space: nowrap;
    -webkit-mask-image: linear-gradient(270deg, transparent, #000 10px);
    mask-image: linear-gradient(270deg, transparent, #000 20px);
    @media screen and (max-width: 768px) {
        overflow: auto;
        scroll-snap-type: x mandatory;
    } ;
`;
const Game_tag_app = styled.a`
    display: inline-block;
    line-height: 19px;
    background-color: #96a3ae;
    color: #fff;
    padding: 0.7px 4px;
    font-size: 12px;
    border-radius: 5px;
    @media screen and (max-width: 768px) {
        scroll-snap-align: start;
    }
`;
const Game_warning = styled.div`
    margin-top: 7px;
    line-height: 1;
    color: #fff;
    padding: 7px 8px;
    background-color: #e60;
    border-radius: 5px;
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    cursor: pointer;
`;
const Game_review_summary = styled.div`
    margin-top: 7px;
    padding: 8px;
    line-height: 1;
    color: #c6d4df;
    background-color: #1c2937;
    border-radius: 5px;
`;

const GameItem = ({
    name,
    slug,
    id,
    background_image,
    released,
    updated,
    genres,
    rating,
    esrb_rating,
    parent_platforms = [],
    metacritic = 50,
    options,
}) => {
    return (
        <>
            <GameCard>
                <>
                    <Link href={`/games/${slug}`}>
                        <Game_title>{name}</Game_title>
                    </Link>

                    <Game_image>
                        <Link href={`/games/${slug}`}>
                            <Image
                                alt={name}
                                src={background_image || blackHole}
                                layout='fill'
                                objectFit='cover'
                                quality={30}
                            />
                        </Link>
                    </Game_image>

                    <Game_meta>
                        Release Date: <b>{released}</b>
                    </Game_meta>
                    <Game_meta>
                        Last Update: <b>{updated.slice(0, 10)}</b>
                    </Game_meta>
                    <Game_meta>
                        ESRB rating: <b>{esrb_rating?.name || 'Rating Pending'}</b>
                    </Game_meta>

                    <Game_meta>
                        Platforms:
                        {parent_platforms.map((parent) => (
                            <PlatformType
                                key={parent.platform?.id}
                                platformName={parent.platform?.name}
                            />
                        ))}
                    </Game_meta>
                    <Game_tag_row>
                        {genres.map((genre) => (
                            <GameTag key={genre.id}>{genre.name}</GameTag>
                        ))}
                    </Game_tag_row>
                    <Link href={`/games/${slug}`} passHref>
                        <Game_warning>For more INFO...</Game_warning>
                    </Link>

                    <Game_review_summary>
                        Rating:
                        <span> {rating}</span>
                    </Game_review_summary>
                    <Game_review_summary>
                        Metacritic score:
                        <span> {metacritic || '...loading'}</span>
                    </Game_review_summary>
                </>
            </GameCard>
        </>
    );
};

export default GameItem;

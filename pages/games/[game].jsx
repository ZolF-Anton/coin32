import React from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { PlatformType } from '../../components/mini/PlatformType';
import { GameTag } from '../../components/mini/GameTag';
import MainContainer from '../../components/MainContainer';
import SwiperApp from '../../components/SwiperApp';

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#333" offset="20%" />
      <stop stop-color="#222" offset="50%" />
      <stop stop-color="#333" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#333" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
    typeof window === 'undefined' ? Buffer.from(str).toString('base64') : window.btoa(str);

const GameCard = styled.div`
    background: rgb(227 234 239);
    width: 100%;
    color: #30455a;
    overflow: hidden;
    border: 1px solid hsl(216deg 25% 30%);
    border-radius: 6px;
    padding: 16px;
    z-index: 3;
    box-shadow: 0 8px 24px #959da533;
    transition: left 0.2s ease-out, top 0.2s ease-out;
    contain: layout paint;
    margin-top: 3px;
`;
const GameCard_wrap = styled.div`
    @media screen and (min-width: 1023px) {
        display: flex;
        gap: 1rem;
        padding: 1rem;
    }
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
const Game_a = styled.a`
    text-decoration: none;
    display: inline-block;
    cursor: pointer;
    color: #fff;
    text-align: center;
`;
const Game_title = styled.a`
    text-decoration: none;
    font-size: 17px;
    text-decoration: none;
    min-height: 2rem;
    color: #222d3d;
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
    aspect-ratio: 14 / 9;
    margin-bottom: 10px;
`;
const Game_image_mobile = styled(Game_image)`
    margin-top: 7px;
    scroll-snap-type: x mandatory;
    scroll-margin: 0;
    scroll-padding: 0;
    overflow: auto;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }
    @media screen and (min-width: 1023px) {
        display: none;
    }
`;
const Game_image_swiper = styled(Game_image)`
    margin-top: 7px;

    @media screen and (max-width: 1024px) {
        display: none;
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;
const Game_image_wrap = styled(Game_image)`
    scroll-snap-align: center;
    margin: 0;
    position: relative;
`;
const Game_meta = styled.div`
    margin-bottom: 6px;
    font-size: 15px;
    line-height: 1;
`;

const Game_meta_second = styled(Game_meta)`
    margin-top: 7px;
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

    background-color: #96a3ae;
    color: #fff;
    padding: 4px 6px;
    font-size: 12px;
    border-radius: 5px;
    @media screen and (max-width: 768px) {
        scroll-snap-align: start;
    }
`;
const Game_button__orange = styled.button`
    margin-top: 7px;
    line-height: 1;
    color: #fff;
    width: 100%;
    padding: 9.5px 8px;
    border: none;
    background-color: ${(props) => props.bgColor || '#e60'};
    border-radius: 5px;
    font-size: 13px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
    cursor: pointer;
`;
const Game_back__button = styled(Game_button__orange)`
    padding: 12px 8px;
`;
const Game_review_summary = styled.div`
    margin-top: 7px;
    padding: 8px;
    line-height: 1;
    color: #c6d4df;
    background-color: #1c2937;
    border-radius: 5px;
    white-space: pre-wrap;
    a {
        text-decoration: none;
        color: #c6d4df;
    }
`;
const Game_video = styled.video.attrs((props) => (props.poster, props.src))`
    width: 100%;
    border-radius: 5px;
`;

const Game_tag = styled(Game_a_store).attrs((props) => props.href)``;

const Game = ({ game, screenShots }) => {
    const {
        background_image,

        clip,
        developers,
        description_raw,
        esrb_rating,
        genres,
        id,
        metacritic,
        metacritic_platforms,
        name,
        publishers,
        parent_platforms,
        platforms,
        rating,
        released,
        slug,
        tags,
        updated,
        website,
    } = game;
    return (
        <MainContainer>
            <GameCard_wrap>
                {' '}
                <GameCard>
                    <Game_buttons>
                        <Game_a_store>Store</Game_a_store>
                        <Game_a_store>In Library</Game_a_store>
                        <Game_a_store>Wishlist</Game_a_store>
                        <Game_a_store>Follow</Game_a_store>
                        <Game_a_store>Ignore</Game_a_store>
                    </Game_buttons>
                    <Link href={`/games/${slug}`} passHref>
                        <Game_title>{name}</Game_title>
                    </Link>

                    <Game_image>
                        <Link href={`/games/${slug}`}>
                            <a>
                                <Image
                                    alt={name}
                                    src={background_image}
                                    layout='fill'
                                    objectFit='cover'
                                    quality={50}
                                />
                            </a>
                        </Link>
                    </Game_image>
                    <Game_meta>
                        Developer: <b>{(developers[0]?.name, developers[1]?.name) || 'n/a'}</b>
                    </Game_meta>
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
                        Followers: <b>{publishers[0]?.name}</b>
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

                    {website ? (
                        <Game_button__orange>
                            <Game_a href={website} target='_blank' rel='noopener noreferrer'>
                                Click to visit game&apos;s original website
                            </Game_a>
                        </Game_button__orange>
                    ) : (
                        <Game_button__orange bgColor='#96a3ae'>
                            <Game_a href rel='noopener noreferrer'>
                                Can&apos;t find game&apos;s original website
                            </Game_a>
                        </Game_button__orange>
                    )}

                    <Game_review_summary>
                        Rating:
                        <span> {rating}</span>
                    </Game_review_summary>
                    <Game_review_summary>
                        <a href={metacritic_platforms[0]?.url}>
                            Metacritic score:
                            <span> {metacritic || '...loading'}</span>
                        </a>
                    </Game_review_summary>
                </GameCard>
                <GameCard>
                    <Game_meta_second>Description:</Game_meta_second>
                    <Game_review_summary>{description_raw}</Game_review_summary>
                    {platforms[0].requirements?.minimum && (
                        <>
                            <Game_meta_second>Requirements:</Game_meta_second>
                            <Game_review_summary>
                                {platforms[0].requirements.minimum}
                            </Game_review_summary>
                            <Game_review_summary>
                                {platforms[0].requirements.recommended}
                            </Game_review_summary>
                        </>
                    )}
                    <Game_meta_second>Screenshots:</Game_meta_second>
                    <Game_image_mobile>
                        {screenShots &&
                            screenShots.results.map((shot) => (
                                <Game_image_wrap key={shot.id}>
                                    <Image
                                        alt={name}
                                        src={shot.image}
                                        layout='fill'
                                        objectFit='cover'
                                        quality={65}
                                        placeholder='blur'
                                        blurDataURL={`data:image/svg+xml;base64,${toBase64(
                                            shimmer(700, 475)
                                        )}`}
                                    />
                                </Game_image_wrap>
                            ))}
                    </Game_image_mobile>
                    <Game_image_swiper>
                        <SwiperApp screenShots={screenShots} game={game} />
                    </Game_image_swiper>
                    <Game_meta_second>Video:</Game_meta_second>
                    <Game_video
                        muted
                        loop
                        controls
                        poster={clip?.preview || null}
                        src={clip?.clip}
                    ></Game_video>
                    <Game_meta_second>Tags:</Game_meta_second>
                    {tags.map((tag) => (
                        <Game_tag key={tag.id}>{tag.name}</Game_tag>
                    ))}

                    <Link href={`/games`} passHref>
                        <Game_back__button>Back to main page</Game_back__button>
                    </Link>
                </GameCard>
            </GameCard_wrap>
        </MainContainer>
    );
};

export default Game;

export async function getServerSideProps({ params }) {
    const response = await fetch(
        `https://rawg.io/api/games/${params.game}?key=c542e67aec3a4340908f9de9e86038af`
    );

    const responseScreenshots = await fetch(
        `https://rawg.io/api/games/${params.game}/screenshots?key=c542e67aec3a4340908f9de9e86038af`
    );
    const game = await response.json();
    const screenShots = await responseScreenshots.json();

    return {
        props: { game, screenShots }, // will be passed to the page component as props
    };
}

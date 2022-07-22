import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const GameCard = styled.div`
    background: rgb(227 234 239);
    width: 350px;
    color: #30455a;
    overflow: hidden;
    border: 1px solid hsl(216deg 25% 30%);
    border-radius: 6px;
    padding: 16px;
    z-index: 1000000;
    box-shadow: 0 8px 24px #959da533;
    //position: relative;
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
const Game_a = styled.a`
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
    color: #222d3d;
    font-size: 16px;
    margin-bottom: 6px;
    display: block;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
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
`;
const Game_review_summary = styled.div`
    margin-top: 7px;
    padding: 8px;
    line-height: 1;
    color: #c6d4df;
    background-color: #1c2937;
    border-radius: 5px;
`;
// const Game_ = styled.div``;
// const Game_ = styled.div``;
// const Game_ = styled.div``;
// const Game_ = styled.div``;

const GameItem = ({ name, slug, background_image, released, updated, genres }) => {
    return (
        <>
            <GameCard>
                <div>
                    <Game_buttons>
                        <Game_a_store href='https://store.steampowered.com/app/570/?curator_clanid=4777282&amp;utm_source=SteamDB'>
                            Store
                        </Game_a_store>
                        <Game_a_store href='steam://nav/games/details/570'>In Library</Game_a_store>
                        <Game_a_store>Wishlist</Game_a_store>
                        <Game_a_store>Follow</Game_a_store>
                        <Game_a_store>Ignore</Game_a_store>
                    </Game_buttons>
                    <Game_title>{name}</Game_title>
                    <Game_image>
                        <Image
                            alt={name}
                            src={background_image}
                            layout='fill'
                            objectFit='cover'
                            quality={30}
                        />
                        {/* <div
                                class='video'
                                data-src='https://cdn.cloudflare.steamstatic.com/steam/apps/256692021/microtrailer.webm'
                            >
                                <video
                                    autoplay=''
                                    loop=''
                                    src='https://cdn.cloudflare.steamstatic.com/steam/apps/256692021/microtrailer.webm'
                                ></video>
                            </div> */}
                    </Game_image>
                    <Game_meta>
                        Developer: <b>Valve</b>
                    </Game_meta>
                    <Game_meta>
                        Release Date: <b>{released}</b>
                    </Game_meta>
                    <Game_meta>
                        Last Update: <b>{updated.slice(0, 10)}</b>
                        (today)
                    </Game_meta>
                    <Game_meta>
                        24h Player Peak: <b>578,016</b>
                    </Game_meta>
                    <Game_meta>
                        Followers: <b>1,993,285</b>
                    </Game_meta>
                    <Game_meta>
                        Systems:
                        <svg
                            version='1.1'
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            class='octicon octicon-windows'
                            aria-hidden='true'
                        >
                            <path d='M0 1h7v7H0zM0 9h7v7H0zM8 9h7v7H8zM8 1h7v7H8z'></path>
                        </svg>
                        <svg
                            version='1.1'
                            width='16'
                            height='16'
                            viewBox='0 0 412 412'
                            class='octicon octicon-macos'
                            aria-hidden='true'
                        >
                            <path
                                fill-rule='evenodd'
                                d='M361.05 137.57c-61 66-57 118 13 165-11 33-29 63-54 89-17 18-38 25-60 14-32-15-62-14-93 1-18 9-35 5-51-8-49-40-95-150-72-219 18-55 75-99 137-69 21 10 40 6 61-2 51-19 87-10 119 29zm-153-45c0-50 26-80 78-92 5 51-28 91-78 92z'
                            ></path>
                        </svg>
                        <svg
                            version='1.1'
                            width='16'
                            height='16'
                            viewBox='0 0 16 16'
                            class='octicon octicon-linux'
                            aria-hidden='true'
                        >
                            <path
                                fill-rule='evenodd'
                                d='M6.813.034C-.65.635 1.329 8.518 1.218 11.158 1.119 12.555.655 14.262 0 16h2.018c.207-.737.36-1.465.425-2.159.122.085.252.167.39.245.227.133.42.31.626.498.48.438 1.025.933 2.09.996.071.004.143.006.213.006 1.077 0 1.813-.471 2.404-.85.284-.181.529-.338.76-.413.654-.205 1.226-.536 1.654-.957.067-.066.128-.134.187-.202.238.873.565 1.855.926 2.835H16c-1.034-1.597-2.1-3.162-2.079-5.159.044-3.948.45-11.409-7.109-10.806zm3.17 10.145a12.94 12.94 0 0 0-.852-.328 2.08 2.08 0 0 0 .213-.894c.018-.819-.395-1.483-.922-1.485-.526 0-.967.662-.985 1.48v.08a4.609 4.609 0 0 0-.956-.324l-.004-.093c-.03-1.491.884-2.725 2.043-2.756C9.68 5.827 10.642 7.01 10.672 8.5a3.192 3.192 0 0 1-.474 1.777 3.108 3.108 0 0 0-.215-.099zm-1.276.488c.253.087.539.185.921.35l.007.002c.357.147.78.415.76.859-.03.68-.92 1.32-1.743 1.578l-.005.002c-.342.11-.647.306-.97.513-.543.347-1.104.706-1.915.706-.054 0-.107 0-.16-.004-.744-.043-1.09-.36-1.53-.76-.232-.212-.472-.43-.781-.612l-.007-.004c-.667-.377-1.081-.845-1.108-1.253-.013-.203.077-.379.269-.522.416-.312.695-.516.88-.651.204-.15.266-.195.312-.238l.106-.103c.382-.372 1.021-.993 2.002-.993.6 0 1.264.23 1.972.686.333.217.623.317.99.444zM5.6 12.046c-.954-.07-1.721-.33-2.058-.559a.455.455 0 0 0-.51.753c.542.367 1.501.64 2.503.712.17.013.356.02.557.02.871 0 1.978-.083 3.162-.634a.455.455 0 0 0-.383-.824c-1.28.596-2.471.59-3.27.532zM4.25 8.97c-.072-.732-.462-1.285-.873-1.234-.41.05-.686.684-.614 1.415.03.32.123.604.25.82-.031.025-.12.09-.224.166l-.286.21c-.312-.408-.524-.993-.562-1.654-.074-1.29.542-2.373 1.377-2.422.834-.048 1.57.957 1.645 2.245.004.07.006.139.006.207A3.25 3.25 0 0 0 4.25 9a.614.614 0 0 0-.001-.029z'
                            ></path>
                        </svg>
                        <svg
                            version='1.1'
                            width='16'
                            height='16'
                            viewBox='0 0 20 20'
                            class='octicon octicon-steamdeck'
                            aria-hidden='true'
                        >
                            <path
                                clipRule='evenodd'
                                d='M7.777 4.302a5.698 5.698 0 1 1 0 11.396v3.19a8.889 8.889 0 1 0 0-17.777v3.191Zm0 9.587a3.889 3.889 0 1 0 0-7.778 3.889 3.889 0 0 0 0 7.778Z'
                            ></path>
                        </svg>
                        <svg
                            version='1.1'
                            width='16'
                            height='16'
                            viewBox='0 0 20 20'
                            class='octicon octicon-steamdeck_playable'
                            aria-hidden='true'
                        >
                            <path
                                fillRule='evenodd'
                                clipRule='evenodd'
                                d='M10 19a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM8.61 9.444V15h2.779V9.444H8.61Zm.464-1.392a1.667 1.667 0 1 0 1.852-2.771 1.667 1.667 0 0 0-1.852 2.771Z'
                            ></path>
                        </svg>
                    </Game_meta>
                    <Game_tag_row>
                        <Game_tag_app>{genres[0].name}</Game_tag_app>
                        <Game_tag_app>MOBA</Game_tag_app>
                        <Game_tag_app>Multiplayer</Game_tag_app>
                        <Game_tag_app>Strategy</Game_tag_app>
                        <Game_tag_app>eSports</Game_tag_app>
                        <Game_tag_app>Team-Based</Game_tag_app>
                    </Game_tag_row>
                    <Game_warning>Family sharing disabled</Game_warning>
                    <Game_review_summary>
                        <a
                            href='https://store.steampowered.com/app/570/?curator_clanid=4777282&amp;utm_source=SteamDB#app_reviews_hash'
                            target='_blank'
                            rel='noopener'
                        >
                            Rating:
                            <span class='hover_review_good'>😋 82.67%</span>
                        </a>
                        <span class='muted'>/</span>
                        <span class='hover_review_good'>↑1476k</span>
                        <span class='muted'>/</span>
                        <span class='hover_review_poor'>↓300k</span>
                    </Game_review_summary>
                    <Game_review_summary>
                        <a
                            href='https://www.metacritic.com/game/pc/dota-2?utm_source=SteamDB'
                            target='_blank'
                            rel='noopener'
                        >
                            Metacritic score:
                            <span class='hover_review_good'>90</span>
                        </a>
                    </Game_review_summary>
                </div>
            </GameCard>
        </>
    );
};

export default GameItem;

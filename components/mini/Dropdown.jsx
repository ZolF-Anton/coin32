import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaChevronRight, FaChevronDown } from 'react-icons/fa';

const dataLocal = [
    {
        id: 1,
        name: 'PC',
        slug: 'pc',
        platforms: [
            {
                id: 4,
                name: 'PC',
                slug: 'pc',
                games_count: 465231,
                image_background:
                    'https://media.rawg.io/media/games/4be/4be6a6ad0364751a96229c56bf69be59.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
        ],
    },
    {
        id: 2,
        name: 'PlayStation',
        slug: 'playstation',
        platforms: [
            {
                id: 187,
                name: 'PlayStation 5',
                slug: 'playstation5',
                games_count: 628,
                image_background:
                    'https://media.rawg.io/media/games/d89/d89bd0cf4fcdc10820892980cbba0f49.jpg',
                image: null,
                year_start: 2020,
                year_end: null,
            },
            {
                id: 18,
                name: 'PlayStation 4',
                slug: 'playstation4',
                games_count: 6427,
                image_background:
                    'https://media.rawg.io/media/games/34b/34b1f1850a1c06fd971bc6ab3ac0ce0e.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 16,
                name: 'PlayStation 3',
                slug: 'playstation3',
                games_count: 3601,
                image_background:
                    'https://media.rawg.io/media/games/328/3283617cb7d75d67257fc58339188742.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 15,
                name: 'PlayStation 2',
                slug: 'playstation2',
                games_count: 1932,
                image_background:
                    'https://media.rawg.io/media/screenshots/67e/67e5be6ad7a555248f50bd367e9a071c.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 27,
                name: 'PlayStation',
                slug: 'playstation1',
                games_count: 1587,
                image_background:
                    'https://media.rawg.io/media/games/d64/d646810b629081cc12aec49ed9f49441.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 19,
                name: 'PS Vita',
                slug: 'ps-vita',
                games_count: 1945,
                image_background:
                    'https://media.rawg.io/media/games/2f5/2f5eb72fe45540e93ac2726877551a20.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 17,
                name: 'PSP',
                slug: 'psp',
                games_count: 1632,
                image_background:
                    'https://media.rawg.io/media/screenshots/be1/be17f78d80b50121fa2ed6d4562d403e.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
        ],
    },
    {
        id: 3,
        name: 'Xbox',
        slug: 'xbox',
        platforms: [
            {
                id: 1,
                name: 'Xbox One',
                slug: 'xbox-one',
                games_count: 5341,
                image_background:
                    'https://media.rawg.io/media/games/d82/d82990b9c67ba0d2d09d4e6fa88885a7.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 186,
                name: 'Xbox Series S/X',
                slug: 'xbox-series-x',
                games_count: 564,
                image_background:
                    'https://media.rawg.io/media/games/6cc/6cc23249972a427f697a3d10eb57a820.jpg',
                image: null,
                year_start: 2020,
                year_end: null,
            },
            {
                id: 14,
                name: 'Xbox 360',
                slug: 'xbox360',
                games_count: 2773,
                image_background:
                    'https://media.rawg.io/media/games/15c/15c95a4915f88a3e89c821526afe05fc.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 80,
                name: 'Xbox',
                slug: 'xbox-old',
                games_count: 709,
                image_background:
                    'https://media.rawg.io/media/games/6fd/6fd971ffa72faa1758960d25ef6196bc.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
        ],
    },
    {
        id: 4,
        name: 'iOS',
        slug: 'ios',
        platforms: [
            {
                id: 3,
                name: 'iOS',
                slug: 'ios',
                games_count: 74883,
                image_background:
                    'https://media.rawg.io/media/games/35b/35b47c4d85cd6e08f3e2ca43ea5ce7bb.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
        ],
    },
    {
        id: 8,
        name: 'Android',
        slug: 'android',
        platforms: [
            {
                id: 21,
                name: 'Android',
                slug: 'android',
                games_count: 49288,
                image_background:
                    'https://media.rawg.io/media/games/b8c/b8c243eaa0fbac8115e0cdccac3f91dc.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
        ],
    },
    {
        id: 5,
        name: 'Apple Macintosh',
        slug: 'mac',
        platforms: [
            {
                id: 5,
                name: 'macOS',
                slug: 'macos',
                games_count: 95421,
                image_background:
                    'https://media.rawg.io/media/games/942/9424d6bb763dc38d9378b488603c87fa.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 55,
                name: 'Classic Macintosh',
                slug: 'macintosh',
                games_count: 671,
                image_background:
                    'https://media.rawg.io/media/screenshots/6cc/6ccd31115c74d58edb41d0855567d00f.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 41,
                name: 'Apple II',
                slug: 'apple-ii',
                games_count: 422,
                image_background:
                    'https://media.rawg.io/media/games/941/94139518bc51a86b9e1b762e0b8b62c8.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
        ],
    },
    {
        id: 6,
        name: 'Linux',
        slug: 'linux',
        platforms: [
            {
                id: 6,
                name: 'Linux',
                slug: 'linux',
                games_count: 69559,
                image_background:
                    'https://media.rawg.io/media/games/198/1988a337305e008b41d7f536ce9b73f6.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
        ],
    },
    {
        id: 7,
        name: 'Nintendo',
        slug: 'nintendo',
        platforms: [
            {
                id: 7,
                name: 'Nintendo Switch',
                slug: 'nintendo-switch',
                games_count: 4891,
                image_background:
                    'https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 8,
                name: 'Nintendo 3DS',
                slug: 'nintendo-3ds',
                games_count: 1758,
                image_background:
                    'https://media.rawg.io/media/screenshots/375/375f84d018242d7519a230f623981217.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 9,
                name: 'Nintendo DS',
                slug: 'nintendo-ds',
                games_count: 2442,
                image_background:
                    'https://media.rawg.io/media/screenshots/157/1571cdfb52888191eabaf53c2b897240.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 13,
                name: 'Nintendo DSi',
                slug: 'nintendo-dsi',
                games_count: 37,
                image_background:
                    'https://media.rawg.io/media/screenshots/078/078629e997421ca28e9098bd7a87cb10.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 10,
                name: 'Wii U',
                slug: 'wii-u',
                games_count: 1269,
                image_background:
                    'https://media.rawg.io/media/games/926/926928beb8a9f9b31cf202965aa4cbbc.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 11,
                name: 'Wii',
                slug: 'wii',
                games_count: 2360,
                image_background:
                    'https://media.rawg.io/media/screenshots/157/1571cdfb52888191eabaf53c2b897240.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 105,
                name: 'GameCube',
                slug: 'gamecube',
                games_count: 640,
                image_background:
                    'https://media.rawg.io/media/screenshots/33c/33c4f185c9f312cfcf5243d496178b11.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 83,
                name: 'Nintendo 64',
                slug: 'nintendo-64',
                games_count: 362,
                image_background:
                    'https://media.rawg.io/media/games/3a0/3a0c8e9ed3a711c542218831b893a0fa.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 24,
                name: 'Game Boy Advance',
                slug: 'game-boy-advance',
                games_count: 958,
                image_background:
                    'https://media.rawg.io/media/games/dc6/dc68ca77e06ad993aade7faf645f5ec2.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 43,
                name: 'Game Boy Color',
                slug: 'game-boy-color',
                games_count: 408,
                image_background:
                    'https://media.rawg.io/media/screenshots/092/092fc1910f067a95a07c0fbfdbe25f03.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 26,
                name: 'Game Boy',
                slug: 'game-boy',
                games_count: 602,
                image_background:
                    'https://media.rawg.io/media/screenshots/a51/a519f93600f1427375260522f47e2e7b.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 79,
                name: 'SNES',
                slug: 'snes',
                games_count: 926,
                image_background:
                    'https://media.rawg.io/media/screenshots/52b/52b958a7b263d4f264648b710e76a236.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 49,
                name: 'NES',
                slug: 'nes',
                games_count: 951,
                image_background:
                    'https://media.rawg.io/media/screenshots/092/092fc1910f067a95a07c0fbfdbe25f03.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
        ],
    },
    {
        id: 9,
        name: 'Atari',
        slug: 'atari',
        platforms: [
            {
                id: 28,
                name: 'Atari 7800',
                slug: 'atari-7800',
                games_count: 64,
                image_background:
                    'https://media.rawg.io/media/screenshots/565/56504b28b184dbc630a7de118e39d822.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 31,
                name: 'Atari 5200',
                slug: 'atari-5200',
                games_count: 63,
                image_background:
                    'https://media.rawg.io/media/screenshots/c38/c381fe2913f790fc4d66620e8add37b0.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 23,
                name: 'Atari 2600',
                slug: 'atari-2600',
                games_count: 286,
                image_background:
                    'https://media.rawg.io/media/games/23e/23eecccb588a4a9c97f35ebf8f9f00ef.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 22,
                name: 'Atari Flashback',
                slug: 'atari-flashback',
                games_count: 30,
                image_background:
                    'https://media.rawg.io/media/screenshots/2aa/2aa07f58491e14b0183333f8956bc802.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 25,
                name: 'Atari 8-bit',
                slug: 'atari-8-bit',
                games_count: 306,
                image_background:
                    'https://media.rawg.io/media/screenshots/518/5180f00f3d4626c94bdb0259a07a2903.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 34,
                name: 'Atari ST',
                slug: 'atari-st',
                games_count: 836,
                image_background:
                    'https://media.rawg.io/media/screenshots/101/1015fe740ce5654eb97c9140f6da3c3e.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 46,
                name: 'Atari Lynx',
                slug: 'atari-lynx',
                games_count: 56,
                image_background:
                    'https://media.rawg.io/media/screenshots/575/575b2838392ed177dd7d2c734c682f93.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 50,
                name: 'Atari XEGS',
                slug: 'atari-xegs',
                games_count: 22,
                image_background:
                    'https://media.rawg.io/media/screenshots/769/7691726d70c23c029903df08858df001.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 112,
                name: 'Jaguar',
                slug: 'jaguar',
                games_count: 37,
                image_background:
                    'https://media.rawg.io/media/screenshots/7dd/7dd630a9b38257450b53099932d3047d.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
        ],
    },
    {
        id: 10,
        name: 'Commodore / Amiga',
        slug: 'commodore-amiga',
        platforms: [
            {
                id: 166,
                name: 'Commodore / Amiga',
                slug: 'commodore-amiga',
                games_count: 2061,
                image_background:
                    'https://media.rawg.io/media/screenshots/f6b/f6b3338889ec877c9d3d89fc4f665152.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
        ],
    },
    {
        id: 11,
        name: 'SEGA',
        slug: 'sega',
        platforms: [
            {
                id: 167,
                name: 'Genesis',
                slug: 'genesis',
                games_count: 829,
                image_background:
                    'https://media.rawg.io/media/games/637/637d7dc2f44d0f6ddd3ee2c0b1366962.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 107,
                name: 'SEGA Saturn',
                slug: 'sega-saturn',
                games_count: 327,
                image_background:
                    'https://media.rawg.io/media/screenshots/862/862f0a3da04a5e2d5146b35e75e0d85b.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 119,
                name: 'SEGA CD',
                slug: 'sega-cd',
                games_count: 158,
                image_background:
                    'https://media.rawg.io/media/games/951/951f914b28b246835a811894bbc38403.jpeg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 117,
                name: 'SEGA 32X',
                slug: 'sega-32x',
                games_count: 46,
                image_background:
                    'https://media.rawg.io/media/screenshots/f12/f1290d54a99f637def413baa6642fa0c.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 74,
                name: 'SEGA Master System',
                slug: 'sega-master-system',
                games_count: 216,
                image_background:
                    'https://media.rawg.io/media/screenshots/9fb/9fb2f64404aeb409632ab479f2f51443.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 106,
                name: 'Dreamcast',
                slug: 'dreamcast',
                games_count: 345,
                image_background:
                    'https://media.rawg.io/media/games/6c5/6c55e22185876626881b76c11922b073.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
            {
                id: 77,
                name: 'Game Gear',
                slug: 'game-gear',
                games_count: 201,
                image_background:
                    'https://media.rawg.io/media/screenshots/f9a/f9ac59bb4af2ca2193ee9ffb979577cf.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
        ],
    },
    {
        id: 12,
        name: '3DO',
        slug: '3do',
        platforms: [
            {
                id: 111,
                name: '3DO',
                slug: '3do',
                games_count: 92,
                image_background:
                    'https://media.rawg.io/media/screenshots/b45/b452e9b20e969a64d0088ae467d1dcab.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
        ],
    },
    {
        id: 13,
        name: 'Neo Geo',
        slug: 'neo-geo',
        platforms: [
            {
                id: 12,
                name: 'Neo Geo',
                slug: 'neogeo',
                games_count: 111,
                image_background:
                    'https://media.rawg.io/media/screenshots/35f/35fec4f3634887057d5ff72c5efa1cf0.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
        ],
    },
    {
        id: 14,
        name: 'Web',
        slug: 'web',
        platforms: [
            {
                id: 171,
                name: 'Web',
                slug: 'web',
                games_count: 224047,
                image_background:
                    'https://media.rawg.io/media/screenshots/9c6/9c655cc2d558d308c54b9f85601e0bd6.jpg',
                image: null,
                year_start: null,
                year_end: null,
            },
        ],
    },
];

const DropdownWrap = styled.div`
    border-radius: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
    background-color: white;
    width: 85%;
    margin: 1rem auto;
    @media screen and (min-width: 430px) {
        width: 350px;
    }
`;
const DropdownHeader = styled.div`
    padding: 15px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 0.5rem;
    box-shadow: hsla(210, 8%, 62%, 0.2) 0px 8px 24px;
`;
const DropdownBody = styled.div`
    padding: 5px;
    border-top: 1px solid #e5e8ec;
    display: ${(props) => (props.block ? 'block' : 'none')};
    position: absolute;
    background-color: whitesmoke;
    /* border-radius: 0.5rem;
    box-shadow: hsla(210, 8%, 62%, 0.2) 0px 8px 24px; */
    width: 85%;
    margin-bottom: 0.3rem;
    z-index: 5;
`;
const DropItem = styled.div`
    padding: 10px;
    &:hover {
        cursor: pointer;
        background-color: #e3eaef;
    }
`;

const DropIcon = styled.i`
    font-size: 13px;
    color: #91a5be;
    transform: rotate(0deg);
    transition: all 0.2s ease-in-out;
`;
const DropItemDot = styled.span`
    //opacity: ${(props) => props.opacity};
    color: #91a5be;
    transition: all 0.2s ease-in-out;
`;

export const Dropdown = ({ setFilters }) => {
    const [isOpen, setOpen] = useState(false);
    const [items, setItem] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const urlList = {
        main: `https://api.rawg.io/api/platforms/lists/parents?page=1&page_size=20&key=fcc863d352c344f68b3271b8be5ecb6b`,
    };

    const toggleDropdown = () => setOpen(!isOpen);

    const handleItemClick = (id) => {
        selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);

        toggleDropdown();
    };

    useEffect(() => {
        (async () => {
            const resp = await fetch(urlList.main);
            const fetchData = await resp.json();
            setItem(fetchData.results);
            //setItem(dataLocal);
        })();
    }, []);

    useEffect(() => {
        //setFilters(selectedItem);
        setFilters(selectedItem);
    }, [selectedItem]);

    return (
        <DropdownWrap>
            <DropdownHeader onClick={toggleDropdown}>
                {selectedItem
                    ? items.find((item) => item.id == selectedItem).name
                    : 'Select your platform'}
                <DropIcon>{isOpen ? <FaChevronRight /> : <FaChevronDown />}</DropIcon>
            </DropdownHeader>
            <DropdownBody block={isOpen}>
                <DropItem onClick={() => handleItemClick(0)}>All</DropItem>
                {items.map((item) => (
                    <DropItem
                        key={item.id}
                        onClick={(e) => handleItemClick(e.target.id)}
                        id={item.id}
                    >
                        <DropItemDot opacity={item.id == selectedItem ? 1 : 0}>• </DropItemDot>
                        {item.name}
                    </DropItem>
                ))}
            </DropdownBody>
        </DropdownWrap>
    );
};

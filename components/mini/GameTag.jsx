import styled from 'styled-components';

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

export const GameTag = ({ children }) => {
    return <Game_tag_app>{children}</Game_tag_app>;
};

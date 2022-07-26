import MainContainer from '../components/MainContainer';
import styled, { keyframes } from 'styled-components';
import Link from 'next/link';

const forestMoveIn = keyframes`
    from {
        background-position-y: 150%;
    }
    to {
        opacity: 1;
        background-position-y: 100%;
    }
`;
const starsMoveIn = keyframes`
    from {
        background-position-y: -100px;
    }
    to {
        opacity: 1;
        background-position-y: 0;
    }
`;
const silhouetteMoveIn = keyframes`
    from {
        background-position-x: 0;
    }
    to {
        opacity: 1;
        background-position-x: 50%;
    }
`;
const moonMoveIn = keyframes`
    from {
        opacity: 0;
        background-position: right 150%;
    }
    to {
        opacity: 1;
        background-position: top right;
    }
`;
const textFadeIn = keyframes`
    from {
        right: 0;
    }
    to {
        opacity: 1;
        right: 25%;
    }
`;
const MainWrap = styled.main`
    background: #202736;
    background: linear-gradient(to bottom, #181d23 0%, #202736 80%);
    background-attachment: fixed;
    background-size: cover;
    position: relative;
    min-height: 100vh;
    margin: 0 auto;
    z-index: 1;
    &:before {
        content: '';
        position: fixed;
        background: url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Stars.svg?sanitize=true);
        background-attachment: fixed;
        width: 100%;
        min-height: 100vh;
        z-index: -1;
        opacity: 0;
        animation: ${starsMoveIn} 1000ms 300ms forwards;
    }
    @media only screen and (max-width: 450px) {
        overflow: hidden;
    }
`;

const Forest = styled.div`
    position: absolute;
    bottom: -300px;
    left: 0;
    background: url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Trees.svg?sanitize=true)
        bottom left repeat-x;
    background-size: cover;
    width: 100%;
    height: 80%;
    opacity: 0;
    animation: ${forestMoveIn} 1000ms 500ms forwards;
    border-bottom: 300px solid #181d23;
`;

const Silhouette = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    background: url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Silhouette.svg?sanitize=true)
        bottom left no-repeat;
    width: 50%;
    height: 50%;
    opacity: 0;
    animation: ${silhouetteMoveIn} 1000ms 800ms forwards;
    @media only screen and (max-width: 649px) {
        width: 100%;
    }
`;

const Moon = styled.div`
    position: absolute;
    top: 50px;
    right: 0;
    position: fixed;
    background: url(https://raw.githubusercontent.com/yagoestevez/fcc-portfolio/master/src/Images/Moon.svg?sanitize=true)
        right 150% no-repeat;
    background-size: 28% 28%;
    background-attachment: fixed;
    width: 50%;
    height: 50%;
    z-index: -1;
    opacity: 0;
    animation: ${moonMoveIn} 1.2s 1s forwards;
`;

const Container = styled.div`
    width: fit-content;
    position: absolute;
    right: 0;
    top: 50%;
    left: 55%;
    opacity: 0;
    transform: translate(-50%, -50%);
    animation: ${textFadeIn} 1000ms 800ms forwards;
    @media only screen and (max-width: 649px) {
        right: 50%;
        top: 15%;
        width: 80%;
        transform: translate(-50%, 0);
        animation: ${textFadeIn} 1000ms 800ms forwards;
    }
`;

const H2 = styled.h2`
    font-size: 65px;
    font-weight: normal;

    color: #fafafa;
    line-height: 65px;
`;

const Button = styled.button`
    font-size: 33px;
    font-weight: normal;
    background-color: #8a2be2;
    color: #fafafa;
    line-height: 65px;
    border: none;
    border-radius: 5rem;
    padding: 1rem 3rem;
    cursor: pointer;
`;

const P = styled.p`
    font-size: 28px;
    font-weight: normal;
    color: #fafafa;
    line-height: 32px;
    margin-bottom: 24px;
`;

function index() {
    return (
        <MainContainer>
            <MainWrap>
                <Forest></Forest>
                <Silhouette></Silhouette>
                <Moon></Moon>
                <Container>
                    <H2>This is game DB</H2>
                    <P>press to proceed</P>
                    <Link href={'/games'}>
                        <Button>Find a Game</Button>
                    </Link>
                </Container>
            </MainWrap>
        </MainContainer>
    );
}

export default index;

import styled from 'styled-components';
import A from '../components/A';
import MainContainer from '../components/MainContainer';

const Navbar = styled.nav`
    background: blueviolet;
    padding: 15px;
    color: #fff;
    text-decoration: none;
`;

const H1 = styled.h1({
    fontSize: `44px`,
    color: `navy`,
});

function index() {
    return (
        <MainContainer>
            <H1>Main Page</H1>
        </MainContainer>
    );
}

export default index;

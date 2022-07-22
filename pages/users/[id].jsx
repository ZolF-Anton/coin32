import { useRouter } from 'next/router';
import Link from 'next/link';
import styled from 'styled-components';
import MainContainer from '../../components/MainContainer';

const P = styled.p`
    font-size: 22px;
    color: darkcyan;
`;
const Span = styled.span`
    font-size: 22px;
    color: darkolivegreen;
`;

export default function User({ user }) {
    const router = useRouter();

    return (
        <MainContainer>
            <h1>
                User ID <Span>{router.query.id}</Span>
            </h1>
            <P>
                User name: <Span>{user.name}</Span>
            </P>
            <P>
                Nickname: <Span>{user.username}</Span>
            </P>
            <P>
                User name: <Span>{user.name}</Span>
            </P>
            <P>
                Web page: <Span>{user.website}</Span>
            </P>
            <Link href='/users'>BACK to users</Link>
        </MainContainer>
    );
}

export async function getServerSideProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await response.json();

    return {
        props: { user }, // will be passed to the page component as props
    };
}

import Link from 'next/link';
import styled from 'styled-components';

const LinkA = styled.a`
    color: wheat;
    text-decoration: none;
    padding: 15px;
    cursor: pointer;
`;

function A({ text, href }) {
    return (
        <>
            <Link href={href}>
                <LinkA>{text}</LinkA>
            </Link>
        </>
    );
}

export default A;

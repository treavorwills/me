import Head from 'next/head';
import Link from 'next/link';

const name = 'Treavor';
export const siteTitle = 'twills';

export default function Layout( { children, home }) {
    return(
        <>
        <Link href='/'>treavor</Link>
        <ul>
            <li><Link href='/about'>about</Link></li>
            <li><Link href='/experience'>experience</Link></li>
            <li><Link href='/contact'>contact</Link></li>
        </ul>
        </>
    );
}
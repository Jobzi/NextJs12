import style from "../styles/header.module.css";
import Link from 'next/link'

function Header(){
    return <>
        <nav className={style.nav}>
            <ul className={style.ul}>
                <li className={style.li}>
                    <Link href="/">
                        <a className={style.a}>Home</a>
                    </Link>
                </li>
                <li className={style.li}>
                    <Link href="/blog">
                        <a className={style.a}>Blog</a>
                    </Link>
                </li>
                <li className={style.li}>
                    <a className={style.a}>Home</a>
                </li>
            </ul>

        </nav>
    </>
}

export default Header
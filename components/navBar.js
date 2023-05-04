import Head from "next/head";
import Link from "next/link";
import styles from "./navbar.module.css";
import NavLink from './navLink';

const name = "Treavor";
export const siteTitle = "twills";

export default function NavBar() {
  return (
    <div className={styles.nav}>
      <NavLink href='/'>treavor</NavLink>
      <ul className={styles.ul}>
        <li>
          <NavLink href="/about">about</NavLink>
        </li>
        <li>
          <NavLink href="/experience">experience</NavLink>
        </li>
        <li>
          <NavLink href="/contact">contact</NavLink>
        </li>
      </ul>
    </div>
  );
}

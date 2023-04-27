import Head from "next/head";
import Link from "next/link";
import styles from "./nav.module.css";

const name = "Treavor";
export const siteTitle = "twills";

export default function Nav() {
  return (
    <div className={styles.nav}>
      <Link href="/">
        treavor
      </Link>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/about">about</Link>
        </li>
        <li className={styles.li}>
          <Link href="/experience">experience</Link>
        </li>
        <li className={styles.li}>
          <Link href="/contact">contact</Link>
        </li>
      </ul>
    </div>
  );
}

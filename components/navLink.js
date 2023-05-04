import Link from "next/link";
import styles from "./navlink.module.css";

export default function NavLink({ href, children }) {
  return (
    <Link href={href} className={styles.link}>
      {children}
    </Link>
  );
}

import Head from "next/head";
import Image from "next/image";
import NavBar from "./navBar";
import Footer from "./footer";
import styles from "./layout.module.css";

const name = "TW";
export const siteTitle = "Treavor Wills";

export default function Layout({ children, home }) {
  return (
    <>
      <div className={styles.main}>
        <NavBar />
        <header>
          {home ? (
            <>
              <h1 className={styles.center}>Treavor Wills (home)</h1>
            </>
          ) : (
            <>
              <h2 className={styles.center}>Treavor Wills (not home)</h2>
            </>
          )}
        </header>
        <main >{children}</main>
      </div>
      <Footer />
    </>
  );
}

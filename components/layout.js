import Head from "next/head";
import Image from "next/image";
import NavBar from "./navBar";
import Footer from "./footer";

const name = "TW";
export const siteTitle = "Treavor Wills";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer ></Footer>
    </>
  );
}

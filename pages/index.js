import Head from "next/head";
// import Nav from "../components/nav";
import Layout from "../components/layout";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>twills</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>developer</p>
        <p>unconvincing magician</p>
        <p>okay parent</p>
      </main>
    </Layout>
  );
}

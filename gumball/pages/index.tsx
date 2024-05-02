import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Gumball dAPP</title>
      </Head>

      <main className={styles.main}>
        <ConnectButton />

        <h1> Connect your Wallet </h1>
      </main>
    </div>
  );
};

export default Home;

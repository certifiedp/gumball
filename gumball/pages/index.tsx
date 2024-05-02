import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount, useWriteContract } from "wagmi";

const Home: NextPage = () => {
  const account = useAccount();

  return (
    <div className={styles.container}>
      <Head>
        <title>Gumball dAPP</title>
      </Head>

      <main className={styles.main}>
        <ConnectButton />
        <div className = "text-xl">
          {account.isConnected}
         Account ${account.address} is now Connected </div>
      </main>
    </div>
  );
};

export default Home;

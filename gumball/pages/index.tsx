import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount, useWriteContract } from "wagmi";
import { Button } from "../@/components/ui/button";

const Home: NextPage = () => {
  const account = useAccount();

  return (
    <div className={styles.container}>
      <Head>
        <title>Gumball dAPP</title>
      </Head>

      <main className={styles.main}>
        <ConnectButton />
        {account.isConnected}
        <Button>
          Get Gumball!
        </Button>
        <>
          Add Gumball
        </Button>
      </main>
    </div>
  );
};

export default Home;

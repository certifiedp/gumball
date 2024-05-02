import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount, useReadContract, useWriteContract } from "wagmi"
import { Button } from "../@/components/ui/button";
import { Form } from "../@/components/ui/form";
import { Card } from "../@/components/ui/card";

const abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gumballinit",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_gumballadd",
        type: "uint256",
      },
    ],
    name: "addFreshGumballs",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getGumball",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getNumberOfGumballs",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

async function mainData() {
  const { writeContract } = useWriteContract();
  async function addGumball() {
    await writeContract ({
      address: '0x6df511640a9ed4615A4679246E561f711FABDD61',
      abi: abi, 
      functionName: "getGumball",
      args: [],
    });
  }

  async function getNumberGum() {
    const { data } = useReadContract(
      '0x6df511640a9ed4615A4679246E561f711FABDD61',
      abi,
      "getNumberofGumballs",
    );
  }
  return alert(data);
}


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
        <Card>
          <Button className = "m-2" onclick={() => addGumball()}> Add Gumball! </Button>
          <Button className = "m-2" onclick={() => getNumberGum()}> Get Gumball </Button>
        </Card>
      </main>
    </div>
  );
};

export default Home;

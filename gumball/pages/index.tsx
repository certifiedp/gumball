import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount, useWriteContract } from "wagmi";
import { Button } from "../@/components/ui/button";
import { Form } from "../@/components/ui/form";
import { Card } from "../@/components/ui/card";

require('dotenv').config();
const ethers = require('ethers');

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


// new ethers.providers.AlchemyProvider( [ network = "homestead", [ apiKey ] ] )
const provider = new ethers.providers.AlchemyProvider('sepolia', proces.env.TESTNET_ALCHEMY_KEY)

async function main() {
  const contract = new ethers.Contract(
    '0x6df511640a9ed4615A4679246E561f711FABDD61',
    abi,
    provider
  );

  const currentContractValue = await contract.get();

  console.log(currentContractValue)
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
          <Button>Get Gumball!</Button>
          <Button>Add Gumball</Button>
          <Button> </Button>
        </Card>
      </main>
    </div>
  );
};

export default Home;

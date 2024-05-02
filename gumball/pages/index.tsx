import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useAccount, useReadContract, useWriteContract } from "wagmi";
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

const address = "0x6df511640a9ed4615A4679246E561f711FABDD61" as const;

const Home: NextPage = () => {
  const account = useAccount();
  const { writeContract } = useWriteContract();

  const {
    data: gum,
    isError,
    isLoading,
  } = useReadContract({
    address: address,
    abi: abi,
    functionName: "getNumberOfGumballs",
  });

  async function addGumball() {
    await writeContract({
      address: address,
      abi: abi,
      functionName: "addFreshGumballs",
      args: [BigInt(1)],
    });
  }

  async function removeGumball() {
    await writeContract({
      address: address,
      abi: abi,
      functionName: "getGumball"
    });
  }

  function getNumberGum() {
    if (isLoading) return alert("Loading...");
    if (isError) return alert("Error fetching gumballs!");
    alert(gum);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Gumball dAPP</title>
        {account.isConnected}
      </Head>

      <main className={styles.main}>
        <ConnectButton />
        {account.isConnected && <h1> Blockchain Gumball Machine</h1>}
        {account.isConnected && (
          <Card>
            <Button className="m-2" onClick={() => addGumball()}>
              {" "}
              Add One Gumball!{" "}
            </Button>
            <Button className="m-2" onClick={() => getNumberGum()}>
              {" "}
              Get Gumball Count{" "}
            </Button>
            <Button className="m-2" onClick={() => removeGumball()}>
              Remove one Gumball{" "}
            </Button>
          </Card>
        )}
      </main>
    </div>
  );
};

export default Home;
